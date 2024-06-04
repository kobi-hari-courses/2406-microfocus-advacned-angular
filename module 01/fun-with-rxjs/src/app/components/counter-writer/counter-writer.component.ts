import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-writer',
  standalone: true,
  imports: [],
  templateUrl: './counter-writer.component.html',
  styleUrl: './counter-writer.component.css'
})
export class CounterWriterComponent {
  constructor(private counterService: CounterService) { }

  inc() {
    this.counterService.increment();
  }

  dec() {
    this.counterService.decrement();
  }

}
