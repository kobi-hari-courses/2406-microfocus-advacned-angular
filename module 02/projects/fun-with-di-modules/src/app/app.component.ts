import { APP_INITIALIZER, Component, Inject } from '@angular/core';
import { BLANK_TOKEN } from './tokens/blank.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(@Inject(BLANK_TOKEN) protected value: number[]) {
  }
}
