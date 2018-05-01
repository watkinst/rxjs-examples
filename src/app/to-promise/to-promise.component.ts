import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { toPromise } from 'rxjs/operator/toPromise';

@Component({
  selector: 're-to-promise',
  templateUrl: './to-promise.component.html',
  styleUrls: ['./to-promise.component.scss']
})
export class ToPromiseComponent implements OnInit {

  source$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // Will take 3 seconds to complete
    this.source$ = Observable.interval(1000).take(3); // 0, 1, 2

    this.toPromise()
      .then(number => console.log(`The number is: ${ number }`));
  }

  // waits 3 seconds, then logs "2".
  // because the observable takes 3 seconds to complete, and
  // the interval emits incremented numbers starting at 0.
  // will resolve to the last emitted value of source$ once it completes
  //
  // NOTE: using toPromise() is an antipattern except in cases where you’re
  // dealing with an API that expects a Promise, such as async-await
  async toPromise(): Promise<number> {
    return await this.source$.toPromise();
    // return 42;
  }

}
