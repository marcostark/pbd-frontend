import { Component, OnInit } from '@angular/core';
import { LocalModel } from 'app/dashboard/model/local.model';
import { LocalService } from './local.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { UserService } from 'app/services/user.service';
import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  private _local: LocalModel = new LocalModel()
  locais: LocalModel[];
  localForm: FormGroup;
  usuarios: UsuarioModel[];
  submitted = false;
  usuario: UsuarioModel;
  permissao: boolean

  constructor(
    private service: LocalService,
    private formBuilder: FormBuilder, 
    private dialog: MatDialog,
    private _router: Router,
    private _user: UserService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.buscaUsuarioPoremail(localUser.email);
    }else{
      //Acesso não autorizado! Redirecionar para a pagina de login
      console.log("Redirecionando para a pagina de login")
    }  
    this.getData()
    this.getUsuarios()
    this.localForm = this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        nome: ['', Validators.required],
      }
    );
  }

  buscaUsuarioPoremail(email: string){   
    this._user.buscaUsuarioPorEmail(email).subscribe(
      usuario => {
        this.usuario = usuario  
        if(this.usuario.perfis[1]){
          this.permissao = true
        }
        console.log(this.usuario)
      },
      error => {}
    )
  }

  getData(){
    this.service.getLocais().subscribe(
      locais => {
        this.locais = locais;
        console.log(locais)
      },
      (erro) => console.error(erro)
    )
  }

  getUsuarios(){
    this.service.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        console.log(usuarios)
      },
      (erro) => console.error(erro)
    )
  }

  editarLocal(local){
    this._router.navigate(['/local-edit', local.id])
  }


  onSubmit(){
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.localForm.invalid) {
      return
    }
    this._local.nome = this.localForm.value.nome;
    //this._local.usuarios = this.localForm.value.usuarios;
    
    console.log(this._local);
  
    // this.service.adicionarLocal(this._local).subscribe(
    //   (data: any)=> {
    //     this.getData();
    //   },
    //   (erro) => console.log(erro)
    // );
    // this.localForm.reset();  
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.localForm.value))      
  }

  openConfirmationDialog(local){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Deseja realmente excluir o local: " + local.nome
    });
    dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.removerUsuario(local.id);
          }
        });
  }

  
  removerUsuario(local){
    this.service.removerLocal(local).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

}
