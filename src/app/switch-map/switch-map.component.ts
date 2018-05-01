import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 're-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  sourceObservable$: Observable<string>;
  innerObservable$: Observable<string>;
  switchMapObservable$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.sourceObservable$ = this.getLongRunningObservable('Source Observable', 5000);
    this.innerObservable$ = this.getLongRunningObservable('Inner Observable', 1000);

    // Every time our source observable emits a value, a new inner observable is
    // created and subscribed to. The previous inner observable is unsubscribed
    // from and no longer used. The switchMapObservable$ is  'switching' between
    // inner observables.
    this.switchMapObservable$ = this.sourceObservable$.switchMap(sourceValue => {
        console.log(sourceValue);
        return this.innerObservable$;
      });

    this.switchMapObservable$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        console.log,
        console.error,
        () => console.log('Completed switchMapObservable')
      );
  }

  getLongRunningObservable(name: string, delay: number): Observable<string> {
    // Observavble.interval() is a creation operator
    // Observable.map is a transformation operator
    return Observable.interval(delay).map(index => `${ name } : ${ index }`);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('SwitchMap Component Destroyed!');
  }

}
