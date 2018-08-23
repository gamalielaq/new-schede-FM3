import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaAlimentazioneComponent } from './scheda-alimentazione.component';

describe('SchedaAlimentazioneComponent', () => {
  let component: SchedaAlimentazioneComponent;
  let fixture: ComponentFixture<SchedaAlimentazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaAlimentazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaAlimentazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
