import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProblemComponent } from './post-problem.component';

describe('PostProblemComponent', () => {
  let component: PostProblemComponent;
  let fixture: ComponentFixture<PostProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostProblemComponent]
    });
    fixture = TestBed.createComponent(PostProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
