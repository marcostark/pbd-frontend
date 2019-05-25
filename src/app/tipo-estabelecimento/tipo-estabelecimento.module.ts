import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoEstabelecimentoComponent } from './tipo-estabelecimento.component';
import { TipoEstabelecimentoRoutingModule } from './tipo-estabelecimento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TipoEstabelecimentoRoutingModule,
  ],
  declarations: [TipoEstabelecimentoComponent]
})
export class TipoEstabelecimentoModule { }
