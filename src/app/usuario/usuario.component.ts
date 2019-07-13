import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { UsuarioService } from './usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  private _usuario: UsuarioModel = new UsuarioModel();
  usuarios: UsuarioModel[];
  public usuarioForm: FormGroup;

  constructor(
    private service: UsuarioService,
    private _fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.getData()
    this.usuarioForm = this._fb.group(
      {
        nome: ['', Validators.required],
        email: ['', Validators.required],
        cpf: ['', Validators.required],
        telefone1: ['', Validators.required],
        senha: ['', Validators.required],
      }
    )
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

  adicionarUsuario(formUsuario){
    this._usuario.nome = formUsuario.nome;
    this._usuario.email = formUsuario.email;
    this._usuario.cpf = formUsuario.cpf;
    this._usuario.senha = formUsuario.senha;
    this._usuario.telefone1 = formUsuario.telefone1;

    console.log(this._usuario);

    this.service.adicionarUsuario(this._usuario).subscribe(
      (data: any)=> {
        this.getData();
      },
      (erro) => console.log(erro)
    );
    this.usuarioForm.reset();    
  }
     

}
