import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./expander/expander.component";
import { CommonModule } from "@angular/common";

const declarations = [
    ExpanderComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations]
})
export class SharedModule{}