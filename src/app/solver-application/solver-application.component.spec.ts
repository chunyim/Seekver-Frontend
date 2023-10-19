import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverApplicationComponent } from './solver-application.component';

describe('SolverApplicationComponent', () => {
  let component: SolverApplicationComponent;
  let fixture: ComponentFixture<SolverApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolverApplicationComponent]
    });
    fixture = TestBed.createComponent(SolverApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
