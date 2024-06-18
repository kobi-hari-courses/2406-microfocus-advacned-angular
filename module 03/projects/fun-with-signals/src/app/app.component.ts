import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, map, single, take } from 'rxjs';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { mySignal } from './mySignal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    a = signal(2);
    b = signal(3);

    c = computed(() => this.a() + this.b());

    constructor() {
      effect(() => {
        console.log('Inside the effect, the sum is', this.c());
      }, {allowSignalWrites: true});

      const a$ = toObservable(this.a);

      const aSignal = toSignal(a$, {requireSync: true});
    }

    doSomething() {
      this.a.set(5);
      this.b.set(5);

      // ng/signals
    }
}
