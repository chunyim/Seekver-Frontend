import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Problem } from 'src/app/models/problem.model';
import { Category } from 'src/app/models/category.model';
import { ProblemService } from 'src/app/services/problem.service'; //CRUD service
import { CategoryService } from 'src/app/services/category.service';
import { StorageService } from 'src/app/_services/storage.service';
// import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-post-problem',
  templateUrl: './post-problem.component.html',
  styleUrls: ['./post-problem.component.css'],
})
export class PostProblemComponent implements OnInit {
  loading: boolean = false;
  problem: Problem = {
    title: '',
    description: '',
    rewards: '',
    date: undefined,
    category: '',
  };
  submitted = false;
  currentUser: any;
  categories: Category[] = [];

  constructor(
    private problemService: ProblemService,
    private categoryService: CategoryService,
    private storageService: StorageService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });

    this.currentUser = this.storageService.getUser();

    const today = new Date();
    this.problem.date = today; 

  }

  saveProblem(): void {
    this.loading = true;
    const data = {
      seekerName: this.currentUser.username,
      title: this.problem.title,
      description: this.problem.description,
      rewards: this.problem.rewards,
      date: this.problem.date,
      category: this.problem.category,
    };

    this.problemService.create(data).subscribe({
      next: (res) => {
        this.loading = false;
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newProblem(): void {
    this.submitted = false;
    this.problem = {
      seekerName: this.currentUser,
      title: '',
      description: '',
      rewards: '',
      date: this.problem.date,
      category: '',
    };
  }
}
