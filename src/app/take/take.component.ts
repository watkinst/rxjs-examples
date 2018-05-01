import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { take } from 'rxjs/operators/take';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';

@Component({
  selector: 're-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  number$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // Subscribing in our controller :(
    this.number$ = Observable.interval(500);

    // Will not emit an error
    // this.number$ = Observable.empty();

    this.number$
    .pipe(
      take(1)
    )
    .subscribe(
      number => console.log(number),
      err => console.log(`Error: ${ err }`)
    );

    // Subscribing in our template :)
    // this.number$ = Observable.interval(500)
    // .pipe(
    //   take(1)
    // );
  }

}
