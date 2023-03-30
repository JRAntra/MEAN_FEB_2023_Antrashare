import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogueComponent } from './user-dialogue.component';

describe('UserDialogueComponent', () => {
  let component: UserDialogueComponent;
  let fixture: ComponentFixture<UserDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
