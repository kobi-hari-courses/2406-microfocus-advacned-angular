import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnDestroy } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-reader.component.html',
  styleUrl: './counter-reader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent {
  readonly value$ = this.counterService.getValue();

  justANumber = 42;

  constructor(
    private counterService: CounterService, 
  ) {
    setTimeout(() => {
      this.justANumber = 100;
      console.log('Changing the number to 100');
    }, 5000);
  }



}

