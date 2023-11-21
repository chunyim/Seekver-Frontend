import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostProblemComponent } from './components/post-problem/post-problem.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-problem/board-user.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoardApplicationComponent } from './board-application/board-application.component';
import { ProblemDialogComponent } from './problem-dialog/problem-dialog.component';
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostProblemComponent,
    ProblemListComponent,
    ProblemDetailsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NavBarComponent,
    BoardApplicationComponent,
    ProblemDialogComponent,
    ApplicationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ],
  providers: [httpInterceptorProviders, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
