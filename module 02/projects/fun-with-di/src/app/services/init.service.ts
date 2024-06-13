import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable({providedIn: 'root'})
export class InitService {
    constructor(private historyService: HistoryService) {}
    async init(): Promise<void> {
        this.historyService.audit('InitService beginining initialization');
        console.log('InitService beginining initialization');
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('InitService completed initialization');
        this.historyService.audit('InitService completed initialization');
    }

}