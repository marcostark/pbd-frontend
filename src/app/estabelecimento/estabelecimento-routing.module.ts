import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EstabelecimentoComponent } from './estabelecimento-list/estabelecimento.component';
import { EstabelecimentoFormComponent } from './estabelecimento-form/estabelecimento-form.component';

const routes: Routes = [
  {path: 'estabelecimento', component: EstabelecimentoComponent},
  {path: 'estabelecimento-form', component: EstabelecimentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstabelecimentoRoutingModule { }