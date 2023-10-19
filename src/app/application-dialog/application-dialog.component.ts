import { Component } from '@angular/core';
import { Application } from '../models/application';
import { Problem } from '../models/problem.model';
import { ProblemService } from '../services/problem.service';
import { HoveredDataService } from '../services/hovered-data.service';
import { SolverApplicationService } from '../solver-application/solver-application.service';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css']
})
export class ApplicationDialogComponent {

  applications?: Application[];
  dataSource: any;
  currentProblem: Problem = {};
  hoveredProblemId: any;


  displayedColumns: string[] = [
    'userName',
    'lastName',
    'applicationDate',
    'message',
    'contactMethod',
    'contact',
  ];
  constructor
  (
    private solverApplicationService: SolverApplicationService,
    private hoveredDataService: HoveredDataService
  ) {
    this.hoveredProblemId = this.hoveredDataService.getHoveredProblemId();
  }

  ngOnInit(): void {
    this.showApplicationByProblemId();
  }
  showApplicationByProblemId(): void {
    this.solverApplicationService
      .retrieveApplicationByProblemId(this.hoveredProblemId)
      .subscribe({
        next: (data) => {
          this.applications = data;
          this.dataSource = this.applications;
        },
        error: (e) => console.error(e),
      });
  }

}
