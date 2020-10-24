import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBookedComponent } from './travel-booked.component';

describe('TravelBookedComponent', () => {
  let component: TravelBookedComponent;
  let fixture: ComponentFixture<TravelBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelBookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
