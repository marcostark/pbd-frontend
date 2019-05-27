import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
  ],
  declarations: [
    ItemComponent,
  ]
})
export class ItemModule { }
