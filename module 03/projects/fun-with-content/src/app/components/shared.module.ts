import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./expander/expander.component";
import { CommonModule } from "@angular/common";
import { ExpanderToggleDirective } from "./expander/expander-toggle.directive";
import { ExpanderToggleComponent } from "./expander/expander-toggle/expander-toggle.component";
import { StringSelectorComponent } from "./string-selector/string-selector.component";
import { MyIfDirective } from "../directives/my-if.directive";
import { ItemTemplateDirective } from "./string-selector/item-template.directive";
import { MyRepeatDirective } from "../directives/my-repeat.directive";

const declarations = [
    ExpanderComponent, 
    ExpanderToggleDirective, 
    ExpanderToggleComponent, 
    StringSelectorComponent, 
    MyIfDirective, 
    ItemTemplateDirective, 
    MyRepeatDirective

];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class SharedModule{}