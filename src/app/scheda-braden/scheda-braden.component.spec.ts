import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaBradenComponent } from './scheda-braden.component';

describe('SchedaBradenComponent', () => {
  let component: SchedaBradenComponent;
  let fixture: ComponentFixture<SchedaBradenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaBradenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaBradenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
