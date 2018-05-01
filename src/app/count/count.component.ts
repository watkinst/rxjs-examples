import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { count } from 'rxjs/operators/count';

import 'rxjs/add/observable/interval';

@Component({
  selector: 're-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  seconds$: Observable<number>;
  click$: Observable<MouseEvent>;
  secondsBeforeClick$: Observable<number>;
  result$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // Will emit values continuously
    this.seconds$ = Observable.interval(1000);

    // Listens for a click on the page
    this.click$ = Observable.fromEvent(document, 'click');

    // Will run until this.clicks$ emits
    this.secondsBeforeClick$ = this.seconds$
      .pipe(
        takeUntil(this.click$)
      );

    // Counts the number of emissions from this.secondsBeforeClick$ and emits
    // that number when this.click$ emits and this.seconds$ completes
    this.result$ = this.secondsBeforeClick$.pipe(
      count()
    );

    // Subscribing in our component :(
    this.result$.subscribe(seconds => console.log(seconds));
  }

}
