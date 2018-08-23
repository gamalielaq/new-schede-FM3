import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaTinettiBalanceComponent } from './scheda-tinetti-balance.component';

describe('SchedaTinettiBalanceComponent', () => {
  let component: SchedaTinettiBalanceComponent;
  let fixture: ComponentFixture<SchedaTinettiBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaTinettiBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaTinettiBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
