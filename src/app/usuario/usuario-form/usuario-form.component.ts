import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { MustMatch } from 'app/shared/_helpers/must-match.validator';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  private _usuario: UsuarioModel = new UsuarioModel();
  usuarios: UsuarioModel[];
  usuarioForm: FormGroup;
  submitted = false;

  constructor(
    private service: UsuarioService,
    private _router: ActivatedRoute,
    private _routerBack: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone1: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required]
    }, {
        validator: MustMatch('senha', 'confirmaSenha')
      });

      this._router.paramMap.subscribe(params=> {
        const tipoId = params.get('id');
        if(tipoId){
          this.buscarUsuario(tipoId);
        }
      })
  }

  
  buscarUsuario(id){
    // recuperar marca do bd
    this.service.getUsuario(id).subscribe(
      (usuario: UsuarioModel) => this.editarUsuario(usuario),
      (error: any) => console.log(error)        
    );
}

editarUsuario(usuario: UsuarioModel){    
  this._usuario = usuario
  this.usuarioForm.patchValue({
    nome:  usuario.nome,
    email:  usuario.email,
    cpf:  usuario.cpf,
    senha:  usuario.senha,
    telefone1:  usuario.telefone1,
  });
}

  // convenience getter for easy access to form fields
  get f() { return this.usuarioForm.controls; }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.usuarioForm.invalid) {
      return
    }
    this._usuario.nome = this.usuarioForm.value.nome;
    this._usuario.email = this.usuarioForm.value.email;
    this._usuario.cpf = this.usuarioForm.value.cpf;
    this._usuario.senha = this.usuarioForm.value.senha;
    this._usuario.telefone1 = this.usuarioForm.value.telefone1;

    console.log(this._usuario);

    this.service.adicionarUsuario(this._usuario).subscribe(
      (data: any) => {
        this._routerBack.navigate(['/usuario'])
      },
      (erro) => console.log(erro)
    );
    this.usuarioForm.reset();
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
  }

}
