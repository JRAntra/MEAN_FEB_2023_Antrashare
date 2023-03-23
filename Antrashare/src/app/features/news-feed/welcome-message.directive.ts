import { Directive,  ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appWelcomeMessage]'
})
export class WelcomeMessageDirective {

  
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', 'Welcome');
      setTimeout(() => {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }, 5000);
    }, 0);
  }


}
