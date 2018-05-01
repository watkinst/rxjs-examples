import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { mapTo } from 'rxjs/operators/mapTo';
import { reduce } from 'rxjs/operators/reduce';

@Component({
  selector: 're-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit, OnDestroy {

  // How fast can you click the mouse?

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  clicksInFiveSeconds$: Observable<MouseEvent>;
  ones$: Observable<number>;
  count$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.clicksInFiveSeconds$ = Observable.fromEvent<MouseEvent>(document, 'click')
    .pipe(
      takeUntil(Observable.interval(5000))
    );

    this.ones$ = this.clicksInFiveSeconds$
      .pipe(
        mapTo(1),
        takeUntil(this.onDestroy$)
      );

    this.count$ = this.ones$.pipe(
      reduce((acc, one) => acc + one, 0),
      takeUntil(this.onDestroy$)
    );

    this.count$.subscribe(count => console.log(`Count: ${ count }`));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Reduce Component Destroyed!');
  }

}
