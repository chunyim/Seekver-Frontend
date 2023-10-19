import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardApplicationComponent } from './board-application.component';

describe('BoardApplicationComponent', () => {
  let component: BoardApplicationComponent;
  let fixture: ComponentFixture<BoardApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardApplicationComponent]
    });
    fixture = TestBed.createComponent(BoardApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
