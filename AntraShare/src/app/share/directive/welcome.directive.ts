import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.innerText = 'Welcome to Quad_Squad!'; // set the welcome message text

    setTimeout(() => {
      element.nativeElement.style.display = 'none'; // hide the welcome message after 5 seconds
    }, 5000);

  }
}
