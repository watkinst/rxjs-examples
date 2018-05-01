import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';

@Component({
  selector: 're-observable-from',
  templateUrl: './observable-from.component.html',
  styleUrls: ['./observable-from.component.scss']
})
export class ObservableFromComponent implements OnInit {

  // Here, we're creating an observable from a promise with Observable.from()

  private readonly myPromise = new Promise<string>((resolve, reject) => {
    resolve('Resolved from promise!');
  });

  // These will hold our created Observables
  myNumbersObservable$: Observable<number>;
  myStringObservable$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.myNumbersObservable$ = Observable.from([1, 2, 3, 4, 5]);
    this.myStringObservable$ = Observable.from(this.myPromise);

    // No need to unsubscribe from this manually because Observable.from
    // completes after it emits the values you pass to it, but we still
    // shouldn't be subscribing manually as we intend to write declarative
    // rather than imperative code
    this.myNumbersObservable$.subscribe(value => console.log(`Number Value: ${ value}`));
    this.myStringObservable$.subscribe(value => console.log(`String Value: ${ value}`));
  }

}
