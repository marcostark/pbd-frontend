import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedidaComponent} from './medida.component';

const routes: Routes = [
  {path: 'medida', component: MedidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedidaRoutingModule { }