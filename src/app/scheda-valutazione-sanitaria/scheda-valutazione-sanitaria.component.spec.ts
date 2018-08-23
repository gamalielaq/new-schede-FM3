import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaValutazioneSanitariaComponent } from './scheda-valutazione-sanitaria.component';

describe('SchedaValutazioneSanitariaComponent', () => {
  let component: SchedaValutazioneSanitariaComponent;
  let fixture: ComponentFixture<SchedaValutazioneSanitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaValutazioneSanitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaValutazioneSanitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
