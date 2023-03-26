import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

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
    }, 100);
  }

  // @HostListener('window:load') onLoad() {

  // }
}
