import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipoEstabelecimentoComponent} from './tipo-estabelecimento.component';

const routes: Routes = [
  {path: 'tipo-estabelecimento', component: TipoEstabelecimentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEstabelecimentoRoutingModule { }