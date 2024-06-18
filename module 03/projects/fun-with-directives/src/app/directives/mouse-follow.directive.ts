import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseFollow]',
  standalone: true, 
  exportAs: 'mouse'
})
export class MouseFollowDirective {
  public x = 0;
  public y = 0;

  
  @HostListener('mousemove', ['$event'])
  onMouseMove(ev: MouseEvent) {
    this.x = ev.offsetX;
    this.y = ev.offsetY;

  }

  constructor() { 
  }

}
