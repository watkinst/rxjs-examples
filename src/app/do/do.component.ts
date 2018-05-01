import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { map } from 'rxjs/operators/map';

import 'rxjs/add/operator/do';

@Component({
  selector: 're-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss']
})
export class DoComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  clicks$: Observable<MouseEvent>;
  positions$: Observable<Position>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.clicks$ = Observable.fromEvent(document, 'click');

    this.positions$ = this.clicks$
      // Perform a side effect for every emission on the source Observable,
      // but return an Observable that is identical to the source.
      .do(event => console.log(event))
      .pipe(
        map(event => ({ x: event.clientX, y: event.clientY })),
        takeUntil(this.onDestroy$)
      );

    // Subscribing in our component :(
    this.positions$.subscribe(position => console.log(`{ x: ${ position.x }, y: ${ position.y } }`));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Do Component Destroyed!');
  }

}

interface Position {
  x: number;
  y: number;
}
