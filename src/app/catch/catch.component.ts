import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';

@Component({
  selector: 're-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit {

  numbers$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.numbers$ = Observable.of(1, 2, 3, 4, 5)
    .pipe (
      map(number => {
        if (number === 4) {
          throw new Error('four!');
        }
        return number;
      })
    );

    // Continues with a different Observable when there's an error
    this.numbers$
      .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
      .subscribe(numeral => console.log(numeral));

    // Retries the caught source Observable again in case of error, similar to retry() operator
    // this.numbers$
    //   .catch((err, caught) => caught)
    //   .take(30)
    //   .subscribe(numeral => console.log(numeral));

    // Throws a new error when the source Observable throws an error
    // this.numbers$
    //   .catch(err => {
    //     throw new Error('error in source. Details: ' + err);
    //   })
    //   .subscribe(
    //     number => console.log(number),
    //     err => console.log(err)
    //   );

  }

}
