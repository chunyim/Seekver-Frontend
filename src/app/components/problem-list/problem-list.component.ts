import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { Problem } from 'src/app/models/problem.model';
import { ProblemService } from 'src/app/services/problem.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
})
export class ProblemListComponent implements OnInit {
  problems?: Problem[];
  currentProblem: Problem = {};
  currentIndex = -1;
  title = '';

  displayedColumns: string[] = [
    'date',
    'category',
    'title',
    'descriptions',
    'rewards',
    'action',
  ];

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private problemService: ProblemService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.retrieveProblems();
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }

  }

  retrieveProblems(): void {
    this.problemService.getAll().subscribe({
      next: (data) => {
        this.problems = data;
        this.dataSource = new MatTableDataSource<Problem>(this.problems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveProblems();
    this.currentProblem = {};
    this.currentIndex = -1;

  }

  setActiveProblem(problem: Problem, index: number): void {
    this.currentProblem = problem;
    this.currentIndex = index;
    console.log(this.currentProblem.id);
  }

  removeAllProblems(): void {
    this.problemService.deleteAll().subscribe({
      next: (res) => {
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentProblem = {};
    this.currentIndex = -1;

    this.problemService.findByTitle(this.title).subscribe({
      next: (data: Problem[] | undefined) => {
        this.problems = data;
        this.dataSource = new MatTableDataSource<Problem>(this.problems);
        this.dataSource.paginator = this.paginator;
      },
      error: (e: any) => console.error(e),
    });
  }
}
