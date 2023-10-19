import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolverApplicationComponent } from './solver-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SolverApplicationRoutingModule } from './solver-application-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [SolverApplicationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SolverApplicationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ],
})
export class SolverApplicationModule {}
