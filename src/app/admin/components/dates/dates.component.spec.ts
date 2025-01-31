import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatesComponent } from './dates.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
