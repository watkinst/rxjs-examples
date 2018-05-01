import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 're-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  letters$: Observable<string>;
  mergeMapResult$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.letters$ = Observable.of('a', 'b', 'c');

    // mergeMap maps each value emitted by this.letters$ to a different inner
    // observable, then flattens all those inner observables using mergeAll and
    // emits the result of that merge operation
    this.mergeMapResult$ = this.letters$.mergeMap(letter =>
      Observable.interval(1000).map(index => `${ letter }${ index }`)
    );

    this.mergeMapResult$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(resultString => console.log(resultString));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('MergeMap Component Destroyed!');
  }

}
