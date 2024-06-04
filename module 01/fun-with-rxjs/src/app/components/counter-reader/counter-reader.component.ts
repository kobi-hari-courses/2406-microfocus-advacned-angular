import { Component, DestroyRef, OnDestroy } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-reader',
  standalone: true,
  imports: [],
  templateUrl: './counter-reader.component.html',
  styleUrl: './counter-reader.component.css',
})
export class CounterReaderComponent {
  value = -1;

  constructor(
    private counterService: CounterService,
    private destroyRef: DestroyRef
  ) {
    console.log('A new counter reader was created');
    
    const subscription = counterService.getValue().subscribe((value) => {
      this.value = value;
      console.log('Value changed to ', value);
    });

    destroyRef.onDestroy(() => {subscription.unsubscribe()});

  }
}
