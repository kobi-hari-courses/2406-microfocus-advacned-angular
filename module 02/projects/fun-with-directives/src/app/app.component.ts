import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyModule } from './directives/my-tools.module';
import { BlankComponent } from "./blank/blank.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MyModule, BlankComponent]
})
export class AppComponent {
  title = 'fun-with-directives';
}
