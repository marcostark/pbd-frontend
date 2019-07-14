import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProdutoComponent } from './produto-list/produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

const routes: Routes = [
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto-form', component: ProdutoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }