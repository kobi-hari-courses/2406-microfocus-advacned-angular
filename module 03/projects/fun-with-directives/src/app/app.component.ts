import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MouseFollowDirective } from './directives/mouse-follow.directive';
import { EvilDirective } from './directives/evil.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MouseFollowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-with-directives';

  bla(value: any) {
    console.log(value);

  }
}
