import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDialogueComponent } from './email-dialogue.component';

describe('EmailDialogueComponent', () => {
  let component: EmailDialogueComponent;
  let fixture: ComponentFixture<EmailDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
