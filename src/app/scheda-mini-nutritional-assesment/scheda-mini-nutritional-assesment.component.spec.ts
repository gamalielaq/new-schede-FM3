import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaMiniNutritionalAssesmentComponent } from './scheda-mini-nutritional-assesment.component';

describe('SchedaMiniNutritionalAssesmentComponent', () => {
  let component: SchedaMiniNutritionalAssesmentComponent;
  let fixture: ComponentFixture<SchedaMiniNutritionalAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaMiniNutritionalAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaMiniNutritionalAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
