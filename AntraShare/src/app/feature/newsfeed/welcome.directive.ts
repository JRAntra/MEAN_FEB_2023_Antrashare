import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
})
export class WelcomeDirective {
  constructor() {}
  @HostBinding('style.visibility') visibility: string = 'visible';

  @HostListener('window:load') onLoad() {
    setTimeout(() => {
      this.visibility = 'hidden';
    }, 5000);
  }
}
