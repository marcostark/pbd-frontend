import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipoProdutoComponent} from './tipo-produto.component';
import { TipoProdutoFormComponent } from './tipo-produto-form/tipo-produto-form.component';

const routes: Routes = [
  {path: 'tipo-produto', component: TipoProdutoComponent},
  {path: 'tipo-produto-edit/:id', component: TipoProdutoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }