import { Directive } from '@angular/core';

@Directive({
  selector: '[mouseFollow]',
  standalone: true, 
  exportAs: 'mouse'
})
export class EvilDirective {

  constructor() { }

}
