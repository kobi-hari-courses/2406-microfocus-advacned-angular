import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./expander/expander.component";
import { CommonModule } from "@angular/common";
import { ExpanderToggleDirective } from "./expander/expander-toggle.directive";
import { ExpanderToggleComponent } from "./expander/expander-toggle/expander-toggle.component";

const declarations = [
    ExpanderComponent, 
    ExpanderToggleDirective, 
    ExpanderToggleComponent

];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class SharedModule{}