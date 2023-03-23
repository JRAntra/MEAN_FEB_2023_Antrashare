import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appWelcomeMsg]',
})
export class WelcomeMsgDirective implements OnInit {
  constructor(private element: ElementRef) {
    element.nativeElement.style.animation = 'welcomeFadeIn .5s';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.element.nativeElement.style.animation =
        'welcomeFadeOut .5s forwards';
    }, 5000);
  }
}
