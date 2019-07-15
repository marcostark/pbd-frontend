import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipoEstabelecimentoComponent} from './tipo-estabelecimento.component';
import { TipoEstabelecimentoFormComponent } from './tipo-estabelecimento-form/tipo-estabelecimento-form.component';

const routes: Routes = [
  {path: 'tipo-estabelecimento', component: TipoEstabelecimentoComponent},
  {path: 'tipo-estabelecimento-edit/:id', component: TipoEstabelecimentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEstabelecimentoRoutingModule { }