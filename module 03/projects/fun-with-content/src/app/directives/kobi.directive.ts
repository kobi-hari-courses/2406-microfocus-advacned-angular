import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[kobi]', 
    standalone: true

})
export class KobiDirective {
    constructor(private elem: ElementRef<any>) {
        console.log('Kobi Directive', elem);
    }

}