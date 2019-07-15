import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarcaComponent} from './marca.component';
import { MarcaFormComponent } from './marca-form/marca-form.component';

const routes: Routes = [
  {path: 'marca', component: MarcaComponent},
  {path: 'marca-edit/:id', component: MarcaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }