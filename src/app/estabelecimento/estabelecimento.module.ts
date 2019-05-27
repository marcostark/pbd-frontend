import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';
import { EstabelecimentoComponent } from './estabelecimento.component';

@NgModule({
  imports: [
    CommonModule,
    EstabelecimentoRoutingModule
  ],
  declarations: [
    EstabelecimentoComponent
  ]
})
export class EstabelecimentoModule { }
