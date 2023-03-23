import { WelcomeMessageDirective } from './welcome-message.directive';
import { ElementRef } from '@angular/core';

describe('WelcomeMessageDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div')
    };
    const directive = new WelcomeMessageDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
