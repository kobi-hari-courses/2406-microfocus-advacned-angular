import { AfterContentInit, Component, ContentChild, Input, ViewChild, contentChild, effect } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrl: './expander.component.css',
})
export class ExpanderComponent {
  // @ContentChild(ExpanderToggleDirective)
  // expanderToggle: ExpanderToggleDirective | undefined = undefined;

  readonly expanderToggle = contentChild(ExpanderToggleDirective);

  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {

  }

  constructor() {
    effect(() => {
      console.log(' The expander toggle is: ', this.expanderToggle());      
    })
  }
  ngAfterContentInit(): void {
  }
}
