import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  constructor(private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();
    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.template, {
        index: index
      });
    }
  }
}
