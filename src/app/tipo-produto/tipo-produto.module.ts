import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoComponent } from './tipo-produto.component';

@NgModule({
  imports: [
    CommonModule,
    TipoProdutoRoutingModule,
  ],
  declarations: [
    TipoProdutoComponent,
  ]
})
export class TipoProdutoModule { }
