import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) { 
    this.render.setStyle(this.element.nativeElement, "font-size", "20px")
  }

}
