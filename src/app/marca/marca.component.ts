import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MarcaService } from './marca.service';
import { MarcaModel } from 'app/dashboard/model/marca.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  private _marca: MarcaModel = new MarcaModel();
  public marcaForm: FormGroup;

  marcas: MarcaModel[];

  constructor(
    private service: MarcaService,
    private _fb: FormBuilder,    
    public dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getData(); 
    this.marcaForm = this._fb.group(
      {
        nome: ['', Validators.required],
      }
    )
  }

  getData(){
    this.service.getMarcas().subscribe(
      marcas => {
        this.marcas = marcas;                  
      },      
      erro => console.error(erro)
    )
  }

  adicionarMarca(formMarca){
    this._marca.nome = formMarca.nome;
    
    console.log(this._marca);
    
    this.service.adicionarMarca(this._marca).subscribe(
    (data: any) => {
      this.getData(); // Executado depois de dar o post
    },      
      (erro) => console.log(erro)      
    );    
    this.marcaForm.reset();
    // this.showNotification(1, this._marca.assunto);
  }

  removerAssunto(result) {
    this.service.removerMarca(result).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

  editarMarca(marca){    
    this._router.navigate(['/marca-edit', marca.id])
  }

  openConfirmationDialog(marca): void {
    console.log(marca)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {marca: marca, titulo: 'Por favor confirme...', mensagem: 'Deseja realmente excluir a marca: ' + marca.nome +' ?'}
    });

    dialogRef.afterClosed().subscribe(result => {    
      if(result){        
        this.removerAssunto(result)
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
