import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-problem/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';

import { PostProblemComponent } from './components/post-problem/post-problem.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { BoardApplicationComponent } from './board-application/board-application.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'problem-board', component: BoardUserComponent },
  { path: 'application-board', component: BoardApplicationComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'problem/:id', component: ProblemDetailsComponent },
  { path: 'post-problem', component: PostProblemComponent },
  { path: 'problem-list', component: ProblemListComponent },
  {
    path: 'solver-application/:id',
    loadChildren: () =>
      import('./solver-application/solver-application.module').then((m) => m.SolverApplicationModule),
    // canActivate: [loginGuard],
  },
  // { path: 'solver-application/:id', component: SolverApplicationComponent }, //this
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/problem-list' }, // Handle 404 page not found


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// Routes array is passed to the RouterModule.forRoot() method.
// use <router-outlet></router-outlet> directive in the App Component
// where contains navbar and display Components (corresponding to routes) content.
export class AppRoutingModule {}
