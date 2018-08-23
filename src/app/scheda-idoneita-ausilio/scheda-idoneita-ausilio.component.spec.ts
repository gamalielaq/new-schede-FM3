import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaIdoneitaAusilioComponent } from './scheda-idoneita-ausilio.component';

describe('SchedaIdoneitaAusilioComponent', () => {
  let component: SchedaIdoneitaAusilioComponent;
  let fixture: ComponentFixture<SchedaIdoneitaAusilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaIdoneitaAusilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaIdoneitaAusilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
