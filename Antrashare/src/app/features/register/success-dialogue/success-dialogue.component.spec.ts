import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogueComponent } from './success-dialogue.component';

describe('SuccessDialogueComponent', () => {
  let component: SuccessDialogueComponent;
  let fixture: ComponentFixture<SuccessDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
