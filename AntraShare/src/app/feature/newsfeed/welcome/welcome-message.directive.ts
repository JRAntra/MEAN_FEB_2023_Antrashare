import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWelcomeMessage]'
})
export class WelcomeMessageDirective {

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    this.el.nativeElement.innerText = "Welcome to my website!";

    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, 5000);
  }
}
