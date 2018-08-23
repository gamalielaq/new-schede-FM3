import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaBinaComponent } from './scheda-bina.component';

describe('SchedaBinaComponent', () => {
  let component: SchedaBinaComponent;
  let fixture: ComponentFixture<SchedaBinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaBinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaBinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
