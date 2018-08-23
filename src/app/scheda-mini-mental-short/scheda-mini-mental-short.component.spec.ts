import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaMiniMentalShortComponent } from './scheda-mini-mental-short.component';

describe('SchedaMiniMentalShortComponent', () => {
  let component: SchedaMiniMentalShortComponent;
  let fixture: ComponentFixture<SchedaMiniMentalShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaMiniMentalShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaMiniMentalShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
