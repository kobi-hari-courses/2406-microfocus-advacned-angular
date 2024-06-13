import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";
import { IAddition } from "./addition.interface";

@Injectable()
export class AdditionService implements IAddition {
  readonly id: number;

  constructor(private history: HistoryService) { 
    console.log('Addition Service constructed');  
    this.id = Math.ceil((Math.random() * 100000));
  
  }

  add(a: number, b: number): number {
    this.history.audit(`AdditionService.add(${a}, ${b})`);
    return a + b;
  }
}