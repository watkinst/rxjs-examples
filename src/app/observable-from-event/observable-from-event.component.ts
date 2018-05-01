import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 're-observable-from-event',
  templateUrl: './observable-from-event.component.html',
  styleUrls: ['./observable-from-event.component.scss']
})
export class ObservableFromEventComponent implements OnInit, OnDestroy {

  // We'll animate this element
  private circle: HTMLElement;

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  // Theis will hold our created Observable
  mouseObservable$: Observable<Position>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.circle = <HTMLElement> document.getElementById('circle');

    this.mouseObservable$ = Observable.fromEvent<MouseEvent>(document, 'mousemove')
      .map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
      }));

    this.mouseObservable$
      .pipe (
        takeUntil(this.onDestroy$)
      )
      .subscribe(
        this.onNext.bind(this),
        (err: Error) => console.log(`Error: ${ err }`),
        () => console.log('mouseObservable TakeUntil Complete')
      );
  }

  onNext(pos: Position) {
    console.log(pos);
    this.circle.style.left = pos.x.toString() + 'px';
    this.circle.style.top = pos.y.toString() + 'px';
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Observable From Event Component Destroyed!');
  }

}

interface Position {
  x: number;
  y: number;
}
