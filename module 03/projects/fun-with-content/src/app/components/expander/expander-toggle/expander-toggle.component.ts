import { Component, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: '[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrl: './expander-toggle.component.css'
})
export class ExpanderToggleComponent {
  constructor(@Optional() protected expander: ExpanderComponent | null){}

}
