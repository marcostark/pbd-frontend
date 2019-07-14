import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }