import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaDisfagiaInfermieristicaComponent } from './scheda-disfagia-infermieristica.component';

describe('SchedaDisfagiaInfermieristicaComponent', () => {
  let component: SchedaDisfagiaInfermieristicaComponent;
  let fixture: ComponentFixture<SchedaDisfagiaInfermieristicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaDisfagiaInfermieristicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaDisfagiaInfermieristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
