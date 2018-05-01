import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 're-observable-create',
  templateUrl: './observable-create.component.html',
  styleUrls: ['./observable-create.component.scss']
})

export class ObservableCreateComponent implements OnInit, OnDestroy {

  // An observer is just an object that requires three properties to be defined
  private readonly myObserverVariable: Observer<number> = {
    next: (value: number) => console.log(`MyObserverVariable Value: ${ value }`),
    error: (err: any) => console.log(`MyObserverVariable ${ err }`),
    complete: () => console.log('MyObserverVariable Complete')
  };

  // We should not have these in our controller - we should subscribe in our
  // template using the async pipe
  private classSubscription: Subscription;
  private variableSubscription: Subscription;

  // These will hold our created Observables
  observableFromClass$: Observable<number>;
  observableFromVariable$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // Observable.create() expects a subscrube function to be passed as an argument
    // Nothing happens with these Observables until we subscribe to them, which
    // we can do directly in our controller (bad), or in our template (good)
    this.observableFromClass$ =  Observable.create(this.subscribeFunction);
    this.observableFromVariable$ = Observable.create(this.subscribeFunction);

    // Here, we subscribe in our component and assign values to local variables,
    // which we should not do - we should subscribe with the async pipe
    // in our template instead so that we don;t have an opportunity to mutate
    // data, and so that we don't have to clean up our subscriptions when our
    // component is destroyed
    this.classSubscription = this.observableFromClass$.subscribe(new MyObserverClass);
    this.variableSubscription = this.observableFromVariable$.subscribe(this.myObserverVariable);
  }

  subscribeFunction(observer: Observer<number>) {
    // Subscription completes
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 4000);

    // Subscription does not complete
    // let i = 0;
    // setInterval(() => observer.next(++i), 1000);
  }

  ngOnDestroy() {
    // This is the old way of disposing of our subscriptions
    this.classSubscription.unsubscribe();
    this.variableSubscription.unsubscribe();
  }

}

class MyObserverClass implements Observer<number> {
  next(value: number) {
    console.log(`MyObserverClass Value: ${ value }`);
  }

  error(err: any) {
    console.log(`MyObserverClass ${ err }`);
  }

  complete() {
    console.log('MyObserverClass Complete');
  }
}
