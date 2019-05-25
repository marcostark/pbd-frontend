import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedidaComponent} from './medida.component';
import { MedidaRoutingModule } from './medida-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MedidaRoutingModule,
  ],
  declarations: [
    MedidaComponent,
  ]
})
export class MedidaModule { }
