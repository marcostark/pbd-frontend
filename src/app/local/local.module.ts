import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local.component';
import { LocalRoutingModule } from './local-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LocalRoutingModule,
  ],
  declarations: [
    LocalComponent,
  ]
})
export class LocalModule { }
