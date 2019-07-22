import { Component, OnInit } from '@angular/core';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { TipoProdutoService } from './tipo-produto.service';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { StorageService } from 'app/services/storage.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrls: ['./tipo-produto.component.scss']
})
export class TipoProdutoComponent implements OnInit {

  tiposProdutos: TipoProdutoModel[];
  medidas: MedidaModel[];
  tipoProdutoForm: FormGroup;
  usuario: UsuarioModel;
  permissao: boolean

  tipoProduto: TipoProdutoModel = new TipoProdutoModel();
  medida: MedidaModel = new MedidaModel();

  constructor(
    private service: TipoProdutoService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private _router: Router,
    private _user: UserService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.buscaUsuarioPoremail(localUser.email);
    }else{
      //Acesso não autorizado! Redirecionar para a pagina de login
      console.log("Redirecionando para a pagina de login")
    } 
    this.getData()
    this.tipoProdutoForm = this.formBuilder.group(
      {
        medida: ['', Validators],
        nome: ['', Validators],
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
  editarTipoProduto(tipo){
    this._router.navigate(['/tipo-produto-edit', tipo.id])
  }

  adicionarTipoProduto(form){
    this.medida = form.medida
    this.tipoProduto.nome = form.nome
    this.tipoProduto.medida = this.medida

    this.service.adicionarTipoProduto(this.tipoProduto).subscribe(
      (data: any)=> {
        this.getData();
      },
      (erro) => console.log(erro)
    );
    this.tipoProdutoForm.reset();  
  }

  getData(){   
    this.service.getTipoProdutoMedida().subscribe(
      responseList => {
        this.medidas = responseList[0]; 
        this.tiposProdutos = responseList[1]; 
      },
      erro => console.error(erro)
    )
  }

  openConfirmationDialog(tipoProduto){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Deseja realmente excluir o tipo de produto: " + tipoProduto.nome
    });
    dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.removerUsuario(tipoProduto.id);
          }
        });
  }

  removerUsuario(usuario){
    this.service.removerTipoProduto(usuario).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }
}
