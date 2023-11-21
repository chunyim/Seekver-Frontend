import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolverApplicationComponent } from './solver-application.component';


const routes: Routes = [
  {
    path: '',
    component: SolverApplicationComponent,
    children: [{ path: ':id', component: SolverApplicationComponent }], 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolverApplicationRoutingModule { }
