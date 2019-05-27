import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
  ],
  declarations: [
    ProdutoComponent,
  ]
})
export class ProdutoModule { }
