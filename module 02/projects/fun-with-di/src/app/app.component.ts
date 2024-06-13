import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcComponent, GroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
