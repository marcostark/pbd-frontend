import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto-list/produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatDialogModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent,
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class ProdutoModule { }
