import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedListComponent } from './liked-list.component';

describe('LikedListComponent', () => {
  let component: LikedListComponent;
  let fixture: ComponentFixture<LikedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
