import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { BlankComponent } from "../components/blank/blank.component";

@Directive({
    selector: '[myIf]'
})
export class MyIfDirective {
    private _oldCondition = false;

    @Input({required: true, alias: 'myIf'})
    set condition(value: boolean){
        if (value === this._oldCondition) return;

        this._oldCondition = value;
        if (value){
            this.vcr.createEmbeddedView(this.template);
        } else {
            this.vcr.clear();
        }
    }

    constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef){  
    }

}