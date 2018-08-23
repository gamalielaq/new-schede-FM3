import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaMiniMentalStateExaminationComponent } from './scheda-mini-mental-state-examination.component';

describe('SchedaMiniMentalStateExaminationComponent', () => {
  let component: SchedaMiniMentalStateExaminationComponent;
  let fixture: ComponentFixture<SchedaMiniMentalStateExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaMiniMentalStateExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaMiniMentalStateExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
