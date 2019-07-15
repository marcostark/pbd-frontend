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
import { MedidaFormComponent } from './medida-form/medida-form.component';

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
    MedidaFormComponent,
  ]
})
export class MedidaModule { }
