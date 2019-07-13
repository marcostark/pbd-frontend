import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { UsuarioService } from './usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MustMatch } from 'app/shared/_helpers/must-match.validator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  private _usuario: UsuarioModel = new UsuarioModel();
  usuarios: UsuarioModel[];
  usuarioForm: FormGroup;
  submitted = false;

  constructor(
    private service: UsuarioService,    
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getData()
    // this.usuarioForm = this.formBuilder.group(
    //   {
    //     nome: ['', Validators.required],
    //     email: ['', Validators.required, Validators.email],
    //     senha: ['', Validators.required, Validators.minLength(6)],
    //     confirmaSenha: ['', Validators.required]
    //   },
    //    {
    //     validator: MustMatch('password', 'confirmPassword')
    //   }
    // );
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
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.usuarioForm.controls; }

  getData(){
    this.service.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        console.log(usuarios)
      },
      (erro) => console.error(erro)
    )
  }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.usuarioForm.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))
// }


  onSubmit(){
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
      (data: any)=> {
        this.getData();
      },
      (erro) => console.log(erro)
    );
    this.usuarioForm.reset();  
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
  }

  openConfirmationDialog(usuario){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Deseja realmente excluir o usuário: " + usuario.nome
    });
    dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.removerUsuario(usuario.id);
          }
        });
  }

  removerUsuario(usuario){
    this.service.removerUsuario(usuario).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

  editarUsuario(usuario){
    console.log("Editar usuário: " + usuario.nome)
  }
  }
     
