import { Component, ViewChild } from '@angular/core';
import { SolverApplicationService } from '../solver-application/solver-application.service';
import { StorageService } from '../_services/storage.service';
import { Application } from '../models/application';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProblemDialogComponent } from '../problem-dialog/problem-dialog.component';
import { HoveredDataService } from '../services/hovered-data.service';


@Component({
  selector: 'app-board-application',
  templateUrl: './board-application.component.html',
  styleUrls: ['./board-application.component.css'],
})
export class BoardApplicationComponent {
  applications!: Application[];
  currentUser?: any;
  dataSource: any;
  hoveredRowData!: Application;
  currnetApplication!: Application;
  hoveredProblemId!: any;

  displayedColumns: string[] = [
    'application date',
    'contact method',
    'contact',
    'message',
    'action',
  ];

  constructor(
    private solverApplicationService: SolverApplicationService,
    private storageService: StorageService,
    private dialog: MatDialog,
    private hoveredDataService: HoveredDataService,
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.showApplicationByUserName();
  }

  showApplicationByUserName(): void {
    this.solverApplicationService
      .retrieveApplicationByUserName(this.currentUser.username)
      .subscribe({
        next: (data) => {
          this.applications = data;
          this.dataSource = new MatTableDataSource<Application>(this.applications);
          this.dataSource.paginator = this.paginator;
        },
        error: (e) => console.error(e),
      });
  }
  onRowHover(rowData: Application) {
    this.hoveredRowData = rowData;
    this.hoveredProblemId = this.hoveredRowData.problemId;
    this.hoveredDataService.setHoveredData(this.hoveredProblemId);
  }
  openDialog() {
    this.dialog.open(ProblemDialogComponent);
  }
}
