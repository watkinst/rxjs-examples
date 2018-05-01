import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/publish';

@Component({
  selector: 're-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit, OnDestroy {

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  source$: Observable<number>;
  publishExample$: ConnectableObservable<number>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.source$ = Observable.interval(500);

    this.publishExample$ = this.source$
      .pipe(
        takeUntil(this.onDestroy$),
      )
      .publish();

    // Subscribing in our controller :(
    this.publishExample$.subscribe(num => console.log(`Subscriber One: ${ num }`));
    this.publishExample$.subscribe(num => console.log(`Subscriber Two: ${ num }`));

    // publishExample won't start emitting values until 5 seconds elapses
    setTimeout(() => this.publishExample$.connect(), 5000);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Publish Component Destroyed!');
  }

}
