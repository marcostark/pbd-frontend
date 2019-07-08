import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TipoEstabelecimentoComponent } from './tipo-estabelecimento.component';
import { TipoEstabelecimentoRoutingModule } from './tipo-estabelecimento-routing.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    TipoEstabelecimentoRoutingModule,
  ],
  declarations: [TipoEstabelecimentoComponent]
})
export class TipoEstabelecimentoModule { }
