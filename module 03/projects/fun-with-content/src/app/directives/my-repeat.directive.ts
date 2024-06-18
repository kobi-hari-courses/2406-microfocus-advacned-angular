import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface RepeatContext {
  $implicit: number;

  first: boolean;
}

@Directive({
  selector: '[myRepeat]',
})
export class MyRepeatDirective {
  private _times = 0;

  @Input('myRepeat')
  set times(value: number) {
    this._times = value;
    this.invalidate();
  }

  private _startWith = 1;
  @Input('myRepeatStartWith')
  set startWith(value: number) {
    this._startWith = value;
    this.invalidate();
  }

  invalidate() {
    while (this.container.length > this._times) {
      this.container.remove(this.container.length - 1);
    }

    while (this.container.length < this._times) {
      this.container.createEmbeddedView(this.template, {
        $implicit: this.container.length + 1,
        first: this.container.length === 0,
      });
    }

    for (let i = 0; i < this.container.length; i++) {
      const view = this.container.get(i) as EmbeddedViewRef<RepeatContext>;
      if (view !== null) {
        view.context.$implicit = i + this._startWith;
      }
    }
  }

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<RepeatContext>
  ) {}
}
