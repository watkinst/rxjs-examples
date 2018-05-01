import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { first } from 'rxjs/operators/first';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';

@Component({
  selector: 're-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // Here, we are only interested in the first emitted value

  number$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // Subscribing in our controller :(
    this.number$ = Observable.interval(500);

    // Will emit an error
    // this.number$ = Observable.empty();

    this.number$
    .pipe(
      // first without predicate function
      // can take a comparison function like first(val => val > 6)
      // and will throw an error if no emitted value matches
      first()
    )
    .subscribe(
      number => console.log(number),
      err => console.log(`Error: ${ err }`)
    );

    // Subscribing in our template :)
    // this.number$ = Observable.interval(500)
    //   .pipe(
    //     first()
    //   );

    // Subscribing in our template - will throw error
    // this.number$ = Observable.range(1, 5)
    //   .pipe(
    //     first(num => num > 6)
    //   );
  }

}
