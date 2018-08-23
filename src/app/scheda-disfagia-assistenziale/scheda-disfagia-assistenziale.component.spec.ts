import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaDisfagiaAssistenzialeComponent } from './scheda-disfagia-assistenziale.component';

describe('SchedaDisfagiaAssistenzialeComponent', () => {
  let component: SchedaDisfagiaAssistenzialeComponent;
  let fixture: ComponentFixture<SchedaDisfagiaAssistenzialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaDisfagiaAssistenzialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaDisfagiaAssistenzialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
