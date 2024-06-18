import { Directive, TemplateRef } from "@angular/core";


interface ItemTemplateContext {
    $implicit: string;
  
  }

@Directive({
    selector: '[itemTemplate]'    
})
export class ItemTemplateDirective {
  constructor(public template: TemplateRef<ItemTemplateContext>) {}
}