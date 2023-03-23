import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';


@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective implements OnInit {


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, 5000);
  }

}
