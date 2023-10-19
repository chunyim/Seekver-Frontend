// Storage Service
// StorageService manages user information (username, email, roles) inside Browser’s Session Storage.
// For Logout, we will clear this Session Storage.

import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';

const USER_KEY = 'auth-user';
const CURRENT_PROBLEM_KEY = 'current-problem';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public saveCurrentProblem(problem: Problem | null): void {
    window.sessionStorage.removeItem(CURRENT_PROBLEM_KEY);
    window.sessionStorage.setItem(CURRENT_PROBLEM_KEY, JSON.stringify(problem));
  }

  public getCurrentProblem(): Problem | null {
    const problem = window.sessionStorage.getItem(CURRENT_PROBLEM_KEY);
    if (problem) {
      return JSON.parse(problem);
    }
    return null;
}

}