import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";
import { IAddition } from "./addition.interface";

@Injectable({providedIn: 'root'})
export class WrongAdditionService implements IAddition {
  readonly id: number;

  constructor(private history: HistoryService) { 
    console.log('Wrong Addition Service constructed');  
    this.id = Math.ceil((Math.random() * 100000));
  
  }

  add(a: number, b: number): number {
    this.history.audit(`Wrongly Adding (${a}, ${b})`);
    return a + b + 1;
  }
}
