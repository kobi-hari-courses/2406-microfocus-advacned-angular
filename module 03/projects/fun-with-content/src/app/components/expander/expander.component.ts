import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.css'
})
export class ExpanderComponent {
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
