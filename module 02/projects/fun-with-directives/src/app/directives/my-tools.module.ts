import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { ImageUrlDirective } from "./image-url.directive";
import { CrazyButtonComponent } from "../components/crazy-button/crazy-button.component";

const publicImports = [
    HighlightDirective, 
    ImageUrlDirective, 
    CrazyButtonComponent
]

@NgModule({
    declarations: [], 
    imports: [...publicImports],
    exports: [...publicImports]


})
export class MyModule{}