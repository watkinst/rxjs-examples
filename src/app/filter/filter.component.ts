import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { filter } from 'rxjs/operators/filter';

import 'rxjs/add/observable/interval';

@Component({
  selector: 're-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  number$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.number$ = Observable.interval(500);

    this.number$
      .pipe(
        filter(number => number % 2 === 0),
        takeUntil(this.onDestroy$)
      )
      .subscribe(number => console.log(number));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Filter Component Destroyed!');
  }

}
