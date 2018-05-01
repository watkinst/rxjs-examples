import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { find } from 'rxjs/operators/find';

import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 're-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit, OnDestroy {

  // Here. we find the first click on a <section> element

  // A notifier to help us unsubscribe properly - the recommended way
  private onDestroy$: Subject<void>;

  click$: Observable<MouseEvent>;
  result$: Observable<MouseEvent>;

  constructor() { }

  ngOnInit() {
    this.onDestroy$ = new Subject<void>();

    this.click$ = Observable.fromEvent(document, 'click');
    this.result$ = this.click$
      .pipe(
        find(event => event.srcElement.tagName === 'SECTION'),
        takeUntil(this.onDestroy$)
      );

    this.result$.subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    console.log('Find Component Destroyed!');
  }

}
