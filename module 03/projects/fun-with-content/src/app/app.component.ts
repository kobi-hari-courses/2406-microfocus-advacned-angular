import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './components/shared.module';
import { BlankComponent } from "./components/blank/blank.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SharedModule, BlankComponent]
})
export class AppComponent {
  title = 'fun-with-content';
}
