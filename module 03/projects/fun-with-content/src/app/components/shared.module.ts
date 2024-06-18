import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./expander/expander.component";
import { CommonModule } from "@angular/common";
import { ExpanderToggleDirective } from "./expander/expander-toggle.directive";

const declarations = [
    ExpanderComponent, 
    ExpanderToggleDirective

];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class SharedModule{}