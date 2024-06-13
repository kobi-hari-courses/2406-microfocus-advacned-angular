import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class HistoryService {
    readonly records: string[] = [];

    constructor() {
        console.log('History Service constructed'); 
    }

    audit(txt: string) {
        this.records.push(txt);
        console.log(this.records);
    }

}