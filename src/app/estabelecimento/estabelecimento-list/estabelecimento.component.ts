import { Component, OnInit } from '@angular/core';
import { EstabelecimentoModel } from 'app/dashboard/model/estabelecimento.model';
import { EstabelecimentoService } from '../estabelecimento.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { StorageService } from 'app/services/storage.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos: EstabelecimentoModel[];
  usuario: UsuarioModel = new UsuarioModel

  constructor(
    private service: EstabelecimentoService,
    public dialog: MatDialog,
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
    this.getData();
  }

  getData(){
    this.service.getEstabelecimentos().subscribe(
      estabelecimentos => {
        this.estabelecimentos = estabelecimentos;    
        console.log(this.estabelecimentos)     
      },
      (erro) => console.error(erro)
    )
  }

  openConfirmationDialog(estabelecimento){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Deseja realmente excluir o estabelecimento: " + estabelecimento.nome
    });
    dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.removerUsuario(estabelecimento.id);
          }
        });
  }

  removerUsuario(estabelecimento){
    this.service.removerEstabelecimento(estabelecimento).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

  editarEstabelecimento(estabelecimento){
    console.log("Editar Estabelecimento: " + estabelecimento.nome)
  }

  buscaUsuarioPoremail(email: string){   
    this.service.buscaUsuarioPorEmail(email).subscribe(
      usuario => {
        this.usuario = usuario
        console.log(this.usuario)
      },
      error => {}
    )
  }
}
