import { Component } from '@angular/core';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css',
  providers: []
})
export class CalcComponent {
  constructor(protected additionSerivce: AdditionService){}

  result: number = 0;

  add(a: number, b: number) {
    this.result = this.additionSerivce.add(a, b);
  }

}
