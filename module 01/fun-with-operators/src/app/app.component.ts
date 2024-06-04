import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, Observer, filter, interval, map, mergeAll, of, switchAll, take } from 'rxjs';
import { Color } from './models/color.model';
import { CommonModule } from '@angular/common';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private colorsService: ColorsService){}

  readonly keyword$ = new BehaviorSubject<string>('');

  readonly results$ = this.keyword$.pipe(
    map(keyword => this.colorsService.searchAsync(keyword)), 
    switchAll()
  );




  observe<T>(observable: Observable<T>, id: string): void {
    const observer: Observer<T> =  {
      next: x => console.log(`Observer ${id}: ${x}`),
      error: err => console.error(`Observer ${id}: ${err}`),
      complete: () => console.log(`Observer ${id}: complete`),
    };

    observable.subscribe(observer);
  }

  go() {
    const int$ = interval(1000);
    const mapped$ = int$.pipe(
      map(x => x * 2)
    );

    const filtered$ = int$.pipe(
      filter(x => x % 2 === 0)
    );

    const take$ = int$.pipe(
      take(3)
    );


    this.observe(int$, 'interval');
    // this.observe(mapped$, 'mapped');
    this.observe(take$, 'take');


  }
}
