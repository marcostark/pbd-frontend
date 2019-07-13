import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: UsuarioModel[];

  constructor(
    private service: UsuarioService
  ) {}

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        console.log(usuarios)
      },
      (erro) => console.error(erro)
    )
  }

}
