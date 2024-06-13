import { Inject, Injectable } from "@angular/core";
import { PREFIX } from "../tokens/prefix.token";
import { TIMESTAMP } from "../tokens/timestamp.token";

@Injectable({providedIn: 'root'})
export class HistoryService {
    readonly records: string[] = [];

    constructor(
            @Inject(TIMESTAMP) private timestamp: () => string,
            @Inject(PREFIX) private prefix: string ) {
        console.log('History Service constructed'); 
    }

    audit(txt: string) {
        this.records.push(`${this.prefix} ${this.timestamp()}: ${txt}`);
        console.log(this.records);
    }

}