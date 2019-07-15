import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent}
  {path: 'usuario-edit/:id', component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }