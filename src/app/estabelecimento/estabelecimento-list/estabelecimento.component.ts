import { Component, OnInit } from '@angular/core';
import { EstabelecimentoModel } from 'app/dashboard/model/estabelecimento.model';
import { EstabelecimentoService } from '../estabelecimento.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos: EstabelecimentoModel[];

  constructor(
    private service: EstabelecimentoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
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
}
