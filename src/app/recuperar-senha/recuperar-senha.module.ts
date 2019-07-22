import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,MatProgressBarModule
} from '@angular/material';
import { RecuperarSenhaComponent } from './recuperar-senha.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule, 
    FormsModule,
    MatProgressBarModule
  ],
  declarations: [
    RecuperarSenhaComponent
  ],
  exports: [
    RecuperarSenhaComponent
  ]
})
export class RecuperarSenhaModule { }
