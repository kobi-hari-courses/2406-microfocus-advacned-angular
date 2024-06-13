import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @Input('highlight')
  set color(value: string | undefined) {
    console.log('Highlight directive color = ', value, typeof value);
    if ((value !== undefined) && (value.trim().length > 0)) this.bg = value;
  }

  @HostBinding('style.background')
  bg: string = 'pink';

  @HostListener('click')
  onClick() {
    this.bg = 'yellow';
  }

  constructor(private elem: ElementRef<any>, private renderer: Renderer2) {
    // elem.nativeElement.style.backgroundColor = 'yellow';

    // renderer.setStyle(elem.nativeElement, 'backgroundColor', 'pink');

  }

}
