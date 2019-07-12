import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoComponent } from './tipo-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TipoProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [
    TipoProdutoComponent,
  ]
})
export class TipoProdutoModule { }
