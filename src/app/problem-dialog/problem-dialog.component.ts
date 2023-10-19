import { Component } from '@angular/core';
import { Problem } from '../models/problem.model';
import { ProblemService } from '../services/problem.service';
import { HoveredDataService } from '../services/hovered-data.service';

@Component({
  selector: 'app-problem-dialog',
  templateUrl: './problem-dialog.component.html',
  styleUrls: ['./problem-dialog.component.css']
})
export class ProblemDialogComponent {
  problems?: Problem[];
  dataSource: any;
  currentProblem: Problem = {};
  hoveredProblemId: any;

  displayedColumns: string[] = [
    'date',
    'category',
    'title',
    'descriptions',
    'rewards',
  ];
  
  constructor(
    private problemService: ProblemService,
    private hoveredDataService: HoveredDataService
  ) {
    this.hoveredProblemId = this.hoveredDataService.getHoveredProblemId();

  }

  ngOnInit(): void {
    this.retrieveProblemsById();
  }

  retrieveProblemsById(): void {
    this.problemService.get(this.hoveredProblemId).subscribe({
      next: (data) => {
        this.problems = [data];
        this.dataSource = this.problems;

      },
      error: (e) => console.error(e),
    });
  }

}

