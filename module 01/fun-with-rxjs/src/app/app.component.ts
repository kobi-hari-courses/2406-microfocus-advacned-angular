import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, interval, of } from 'rxjs';
import { CounterReaderComponent } from "./components/counter-reader/counter-reader.component";
import { CounterWriterComponent } from "./components/counter-writer/counter-writer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterReaderComponent, CounterWriterComponent, CommonModule]
})
export class AppComponent {
  isReaderShowing = true;
  toggleReader() {
    this.isReaderShowing = !this.isReaderShowing;
  }

  createObserver(id: string): Observer<number> {
    return {
      next: (value: number) => console.log(`Observer ${id} next value: ${value}`),
      error: (error: any) => console.error(`Observer ${id} error: ${error}`),
      complete: () => console.log(`Observer ${id} complete`),
    };
  }

  createOfObservable(): Observable<number> {
    return of(42);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }
  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 1000);
      setTimeout(() => observer.next(200), 2000);
      setTimeout(() => observer.next(300), 4000);
      setTimeout(() => observer.next(500), 6000);
      setTimeout(() => observer.complete(), 7000);
      setTimeout(() => observer.next(600), 8000);
    });
  }

  createHotCustomObservable(): Observable<number> {
    const sub = new Subject<number>();
    sub.next(42);
    setTimeout(() => sub.next(100), 1000);
    setTimeout(() => sub.next(200), 2000);
    setTimeout(() => sub.next(300), 4000);
    setTimeout(() => sub.next(500), 6000);
    setTimeout(() => sub.complete(), 7000);

    return sub;
  }

  createBehaviorSubject(): Observable<number> {
    const sub = new BehaviorSubject<number>(42);    
    setTimeout(() => sub.next(100), 1000);
    setTimeout(() => sub.next(200), 2000);
    setTimeout(() => sub.next(300), 4000);
    setTimeout(() => sub.next(500), 6000);
    setTimeout(() => sub.complete(), 7000);

    return sub;
  }

  // -------------- 42 - |

  // ReplaySubject(1)

  createReplaySubject(): Observable<number> {
    const sub = new ReplaySubject<number>(1);    
    setTimeout(() => sub.next(100), 1000);
    setTimeout(() => sub.next(200), 2000);
    setTimeout(() => sub.next(300), 4000);
    setTimeout(() => sub.next(500), 6000);
    setTimeout(() => sub.complete(), 7000);

    return sub;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createReplaySubject();
    observable.subscribe(observerA);

    setTimeout(() => {
      observable.subscribe(observerB);
    }, 3500);

    setTimeout(() => {
      observable.subscribe(observerC);
    }, 8000);

  }
}
