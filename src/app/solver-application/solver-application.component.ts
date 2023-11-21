import { Component, Input } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Problem } from '../models/problem.model';
import { ActivatedRoute } from '@angular/router';
import { ProblemService } from '../services/problem.service';
import { exhaustMap } from 'rxjs';
import { SolverApplicationService } from './solver-application.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-solver-application',
  templateUrl: './solver-application.component.html',
  styleUrls: ['./solver-application.component.css'],
})
export class SolverApplicationComponent {
  loading: any = false;
  applicationForm!: FormGroup;
  currentUser: any;
  submitted = false;

  constructor(
    private problemService: ProblemService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private applicationService: SolverApplicationService
  ) {}

  @Input() currentProblem: Problem = {
    id: '',
    seekerName: '',
    title: '',
    description: '',
    category: '',
    rewards: '',
    date: undefined,
  };

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.getProblem(this.route.snapshot.params['id']);

    this.applicationForm = this.fb.group({
      problemId: [this.route.snapshot.params['id']],
      userName: [
        {
          value: this.currentUser.username,
          disabled: true,
        },
      ],
      firstName: [''],
      lastName: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      applicationDate: [
        {
          value: new Date(),
          disabled: true,
        },
      ],
      message: [''],
      contactMethod: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      contact: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    this.getApplicationData();

    this.applicationForm.valueChanges
      .pipe(exhaustMap((data) => this.applicationService.makeApplication(data)))
      .subscribe((data) => console.log(data));
  }

  getApplicationData() {
    this.applicationForm.patchValue({});
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

  submitApplication() {
    this.loading = true;
    this.applicationService
      .makeApplication(this.applicationForm.getRawValue())
      .subscribe((data) => {
        this.loading = false;
        console.log(data);
      });
    this.submitted = true;
  }
}
