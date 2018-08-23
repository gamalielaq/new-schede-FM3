import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaRilevazioneCaduteComponent } from './scheda-rilevazione-cadute.component';

describe('SchedaRilevazioneCaduteComponent', () => {
  let component: SchedaRilevazioneCaduteComponent;
  let fixture: ComponentFixture<SchedaRilevazioneCaduteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaRilevazioneCaduteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaRilevazioneCaduteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
