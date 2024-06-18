import { Component, Input, TemplateRef, contentChild, input, model } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.css'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();

  readonly selected = model<string>();

  readonly itemTemplateDirective = contentChild(ItemTemplateDirective);

  onSelect(value: string) {
    this.selected.set(value);
  }


}
