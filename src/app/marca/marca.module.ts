import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaComponent } from './marca.component';
import {MarcaRoutingModule} from './marca-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MarcaRoutingModule,
  ],
  declarations: [
    MarcaComponent,
  ]
})
export class MarcaModule { }
