import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent implements OnDestroy {
  id = Math.random();


  constructor() {
    console.log('BlankComponent created');

  }

  ngOnDestroy(): void {
    console.log('BlankComponent destroyed');
  }

}
