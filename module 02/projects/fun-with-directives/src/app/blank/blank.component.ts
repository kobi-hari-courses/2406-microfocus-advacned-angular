import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
  @Input()
  set color(value: string) {
    console.log('The blank colors is', value);
  }


}
