import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { Problem } from 'src/app/models/problem.model';
import { ProblemService } from 'src/app/services/problem.service';
// import { CurrentProblemService } from '../current-problem/current-problem.service';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css'],
})
export class ProblemDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentProblem: Problem = {
    seekerName: '',
    title: '',
    description: '',
    date: undefined,
    category: '',
  };

  message = '';

  private roles: string[] = [];
  isLoggedIn = false;

  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProblem(this.route.snapshot.params['id']);
    }
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }

    this.storageService.saveCurrentProblem(this.currentProblem);
  }

  getProblem(id: string): void {
    this.problemService.get(id).subscribe({
      next: (data) => {
        this.currentProblem = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateProblem(): void {
    this.message = '';

    this.problemService
      .update(this.currentProblem.id, this.currentProblem)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This problem was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteProblem(): void {
    this.problemService.delete(this.currentProblem.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/problems']);
      },
      error: (e) => console.error(e),
    });
  }
}
