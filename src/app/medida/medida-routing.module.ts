import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedidaComponent} from './medida.component';
import { MedidaFormComponent } from './medida-form/medida-form.component';

const routes: Routes = [
  {path: 'medida', component: MedidaComponent},
  {path: 'medida-edit/:id', component: MedidaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedidaRoutingModule { }