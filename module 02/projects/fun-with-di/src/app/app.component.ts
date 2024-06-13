import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CalcComponent, GroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }
}
