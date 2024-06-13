import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    standalone: true, 
    selector: 'img'
})
export class ImageUrlDirective {

    @HostBinding('attr.title')
    @Input()
    src: string = '';

}