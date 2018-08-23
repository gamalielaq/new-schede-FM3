import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaCodifichePatologieIcpcComponent } from './scheda-codifiche-patologie-icpc.component';

describe('SchedaCodifichePatologieIcpcComponent', () => {
  let component: SchedaCodifichePatologieIcpcComponent;
  let fixture: ComponentFixture<SchedaCodifichePatologieIcpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaCodifichePatologieIcpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaCodifichePatologieIcpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
