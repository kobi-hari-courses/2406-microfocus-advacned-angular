import { Component, Inject, Injector, OnInit, effect, inject, runInInjectionContext, signal } from '@angular/core';
import { BLANK } from '../../tokens/blank.token';
import { AdditionService } from '../../services/addition.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-page-bchild-1',
  standalone: true,
  imports: [],
  templateUrl: './page-bchild-1.component.html',
  styleUrl: './page-bchild-1.component.css'
})
export default class PageBchild1Component  {
  protected readonly blank = inject(BLANK);

  readonly a = signal(0);

  e = effect(() => {
    console.log('a changed', this.a())
  })

  protected readonly injector = inject(Injector)

  protected adder = createAdder();
  protected sum = doSomeAdding(10, 20);

  constructor() {
    this.sum = doSomeAdding(10, 40);
    interval(2000).subscribe(val => {
      this.sum = this.adder(val, 40);    
    })
  }

}

function createAdder() {
  const adder = inject(AdditionService);

  return (a: number, b: number) => adder.add(a, b);

}


async function doAddingAsync(a: number, b: number): Promise<number> {
  const adder = inject(AdditionService);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return adder.add(a, b);
}


function doSomeAdding(a: number, b: number): number {
  const adder = inject(AdditionService);
  return adder.add(a, b);
}
