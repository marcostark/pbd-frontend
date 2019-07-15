import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocalComponent} from './local.component';
import { LocalFormComponent } from './local-form/local-form.component';

const routes: Routes = [
  {path: 'local', component: LocalComponent},
  {path: 'local-edit/:id', component: LocalFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }