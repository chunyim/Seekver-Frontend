import { StorageService } from './../_services/storage.service';
import { ProblemService } from './../services/problem.service';
import { Component, ViewChild } from '@angular/core';
import { Problem } from '../models/problem.model';
import { Application } from '../models/application';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HoveredDataService } from '../services/hovered-data.service';
import { ApplicationDialogComponent } from '../application-dialog/application-dialog.component';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent {
  loading: boolean = false;
  problems!: Problem[];
  applications?: Application[];

  displayedColumns: string[] = [
    'date',
    'category',
    'title',
    'descriptions',
    'rewards',
    'action',
  ];
  currentUser?: any;
  currentProblem: Problem = {};
  currentIndex = -1;
  dataSource: any;
  hoveredRowData!: Problem;
  hoveredProblemId!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private problemService: ProblemService,
    private storageService: StorageService,
    public dialog: MatDialog,
    private hoveredDataService: HoveredDataService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.retrieveProblemsByUserName();
  }

  retrieveProblemsByUserName(): void {
    this.loading = true;
    this.problemService.findBySeekerName(this.currentUser.username).subscribe({
      next: (data) => {
        this.loading = false;
        this.problems = data;
        this.dataSource = new MatTableDataSource<Problem>(this.problems);
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.error(e),
    });
  }

  onRowHover(rowData: Problem) {
    this.hoveredRowData = rowData;
    this.hoveredProblemId = this.hoveredRowData.id;
    this.hoveredDataService.setHoveredData(this.hoveredProblemId);
  }

  openDialog() {
    this.dialog.open(ApplicationDialogComponent);
  }
}
