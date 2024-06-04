import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Observer, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');

    const observable = this.createCustomObservable();
    observable.subscribe(observerA);

    setTimeout(() => {
      observable.subscribe(observerB);
    }, 2500);

  }
}
