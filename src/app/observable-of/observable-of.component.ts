import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';

@Component({
  selector: 're-observable-of',
  templateUrl: './observable-of.component.html',
  styleUrls: ['./observable-of.component.scss']
})
export class ObservableOfComponent implements OnInit {

  // These will hold our created Observables
  myNumberObservable$: Observable<number>;
  myStringObservable$: Observable<string>;
  myConcatObservable$: Observable<number | string>;

  constructor() { }

  ngOnInit() {
    this.myNumberObservable$ = Observable.of(1, 2, 3, 4, 5);
    this.myStringObservable$ = Observable.of('a', 'b', 'c', 'd', 'e');

    // Concat concatenates multiple Observables together by sequentially
    // emitting their values, one Observable after the other.
    this.myConcatObservable$ = this.myNumberObservable$.concat(this.myStringObservable$);

    // No need to unsubscribe from these manually because Observable.of
    // completes after it emits the values you pass to it, but we still
    // shouldn't be subscribing manually as we intend to write declarative
    // rather than imperative code
    this.myNumberObservable$.subscribe(value => console.log(`Number Value: ${ value}`));
    this.myConcatObservable$.subscribe(value => console.log(`Concat Value: ${ value}`));
  }

}
