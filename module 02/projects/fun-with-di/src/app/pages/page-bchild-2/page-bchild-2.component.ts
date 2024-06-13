import { Component, DestroyRef, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-page-bchild-2',
  standalone: true,
  imports: [],
  templateUrl: './page-bchild-2.component.html',
  styleUrl: './page-bchild-2.component.css'
})
export default class PageBchild2Component{
  constructor() {
    interval(1000).pipe(
      takeUntilDestroyed()
    ).subscribe(val => console.log('PING', val));

    
  }
}
