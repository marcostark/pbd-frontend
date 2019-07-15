import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TipoEstabelecimentoComponent, DialogOverviewExampleDialog } from './tipo-estabelecimento.component';
import { TipoEstabelecimentoRoutingModule } from './tipo-estabelecimento-routing.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule} from '@angular/material';
import { TipoEstabelecimentoFormComponent } from './tipo-estabelecimento-form/tipo-estabelecimento-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    TipoEstabelecimentoRoutingModule,
  ],
  entryComponents:[
    DialogOverviewExampleDialog
  ],
  declarations: [
    TipoEstabelecimentoComponent,
    DialogOverviewExampleDialog,
    TipoEstabelecimentoFormComponent]
})
export class TipoEstabelecimentoModule { }
