import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';
import { EstabelecimentoComponent } from './estabelecimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EstabelecimentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    EstabelecimentoComponent
  ]
})
export class EstabelecimentoModule { }
