import {Directive, OnDestroy} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";
import {hostInject} from "./host-inject.util";

export type AutoUnsubscribeObserver<T> = Partial<Observer<T>> | ((next: T) => void);
@Directive({
  selector: '[appAutoUnsubscribe]',
  standalone: true
})
export class AutoUnsubscribeDirective implements OnDestroy {

  static subscribe<T>(observable: Observable<T>, observer: AutoUnsubscribeObserver<T>): Subscription {
    return hostInject(AutoUnsubscribeDirective).subscribe(observable, observer);
  }
  private readonly subscriptions = new Subscription();

  subscribe<T>(observable: Observable<T>, observer: AutoUnsubscribeObserver<T>): Subscription {
    const subscription = observable.subscribe(observer as Observer<T>); // TODO cheating TS due to no-matching-overrides error
    this.subscriptions.add(subscription);
    return subscription;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
