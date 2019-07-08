import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedidaComponent} from './medida.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MedidaRoutingModule } from './medida-routing.module';
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
    MedidaRoutingModule,
    ReactiveFormsModule,    
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [
    MedidaComponent,
  ]
})
export class MedidaModule { }
