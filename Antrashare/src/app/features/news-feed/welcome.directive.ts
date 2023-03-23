import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective {

  constructor() { }
  @HostBinding('style.display') display: string = "block";
  
  ngOnInit(){
    setTimeout(() => {
      this.display = "none";
    }
    ,5000)
  }
}
