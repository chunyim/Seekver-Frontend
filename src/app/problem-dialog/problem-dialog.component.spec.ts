import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDialogComponent } from './problem-dialog.component';

describe('ProblemDialogComponent', () => {
  let component: ProblemDialogComponent;
  let fixture: ComponentFixture<ProblemDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemDialogComponent]
    });
    fixture = TestBed.createComponent(ProblemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
