import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './item.component';
import { ItemFormComponent } from './item-form/item-form.component';

const routes: Routes = [
  {path: 'item', component: ItemComponent},
  {path: 'item-edit/:id', component: ItemFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }