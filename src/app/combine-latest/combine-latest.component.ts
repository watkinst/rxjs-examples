import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { combineLatest } from 'rxjs/operators/combineLatest';

import 'rxjs/add/observable/of';

@Component({
  selector: 're-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  weight$: Observable<number>;
  height$: Observable<number>;
  bmi$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    // Weight in kg
    this.weight$ = Observable.of(70, 72, 76, 79, 75);

    // Height in meters
    this.height$ = Observable.of(1.76, 1.77, 1.78);

    this.bmi$ = this.weight$
      .pipe(
        combineLatest(this.height$, (w, h) => w / (h * h))
      );

    // Will log the results of:
    //   75 / (1.76 * 1.76)
    //   75 / (1.77 * 1.77)
    //   75 / (1.78 * 1.78)
    this.bmi$.subscribe(bmi => console.log(`BMI: ${ bmi }`));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Combine Latest Component Destroyed!');
  }

}
