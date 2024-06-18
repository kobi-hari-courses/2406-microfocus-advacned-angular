import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './components/shared.module';
import { BlankComponent } from "./components/blank/blank.component";
import { CommonModule } from '@angular/common';
import { KobiDirective } from './directives/kobi.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SharedModule, BlankComponent, CommonModule, KobiDirective]
})
export class AppComponent {
  showH1 = true;
  toggle() {
    this.showH1 = !this.showH1;
  }

  numbers: number[] | null = [1, 2, 3];

  options = ['red', 'green', 'blue', 'magenta', 'brown'];
  sizes = ['12px', '16px', '20px', '28px', '36px'];

  selectedColor = signal('green');
  selectedSize = signal('16px');  
}
