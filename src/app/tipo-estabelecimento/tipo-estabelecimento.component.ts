import { Component, OnInit, Inject } from '@angular/core';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';
import { TipoEstabelecimentoModel } from 'app/dashboard/model/tipo-estabelecimento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-estabelecimento',
  templateUrl: './tipo-estabelecimento.component.html',
  styleUrls: ['./tipo-estabelecimento.component.scss']
})
export class TipoEstabelecimentoComponent implements OnInit {
  
  private _tipoEstabelecimento: TipoEstabelecimentoModel = new TipoEstabelecimentoModel();
  tiposEstabelecimentos: TipoEstabelecimentoModel[];
  public tipoEstabelecimentoForm: FormGroup;

  constructor(
    private service: TipoEstabelecimentoService,
    private _fb: FormBuilder,
    public dialog: MatDialog,    
  ) { }

  ngOnInit() {    
    this.getData()
    this.tipoEstabelecimentoForm = this._fb.group(
      {
        nome:['', Validators.required],
      }
    )
  }

  getData(){
    this.service.getTipos().subscribe(
      tiposEstabelecimentos => {
        this.tiposEstabelecimentos = tiposEstabelecimentos;  
        console.log(this.tiposEstabelecimentos)             
      },      
      erro => console.error(erro)
    )
  }

  adicionarTipoEstabelecimento(tipo){
    this._tipoEstabelecimento.nome = tipo.nome;
    console.log(this._tipoEstabelecimento)
    this.service.adicionarTipo(this._tipoEstabelecimento).subscribe(
      (data: any) => {
        this.getData();
      },
      (erro) => console.log(erro)
    );
    this.tipoEstabelecimentoForm.reset();
  }

  editarTipo(tiposEstabelecimento){

  }

  removerTipoEstabelecimento(result){
    this.service.removerTipo(result).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

  
  openConfirmationDialog(tiposEstabelecimento): void {
    console.log(tiposEstabelecimento)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {tiposEstabelecimento: tiposEstabelecimento, titulo: 'Por favor confirme...', mensagem: 'Deseja realmente excluir esse tipo: ' + tiposEstabelecimento.nome +' ?'}
    });

    dialogRef.afterClosed().subscribe(result => {    
      if(result){        
        this.removerTipoEstabelecimento(result)
      }
      //this.animal = result;
    });
  }
}


@Component({
  selector: 'confirmation-dialog.component',
  templateUrl: 'confirmation-dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
