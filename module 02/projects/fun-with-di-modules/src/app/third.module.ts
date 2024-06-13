import { NgModule } from "@angular/core";
import { BLANK_TOKEN } from "./tokens/blank.token";

@NgModule({
    providers: [
        { provide: BLANK_TOKEN, useValue: 60, multi: true }
    ]
})
export class ThirdModule {

}