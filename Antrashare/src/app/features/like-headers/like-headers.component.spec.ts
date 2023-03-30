import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeHeadersComponent } from './like-headers.component';

describe('LikeHeadersComponent', () => {
  let component: LikeHeadersComponent;
  let fixture: ComponentFixture<LikeHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
