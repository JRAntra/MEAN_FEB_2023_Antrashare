import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appWelcome]',
})
export class WelcomeDirective implements OnInit {
  constructor() {}

  @HostBinding('style.visibility') visibility: string = 'visible';

  ngOnInit() {
    setTimeout(() => {
      this.visibility = 'hidden';
     environment.isWelcomeMessage = false;
    }, 500);
  }
}
