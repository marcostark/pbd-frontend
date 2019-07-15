import { Component, OnInit } from '@angular/core';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { MedidaService } from './medida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.scss']
})
export class MedidaComponent implements OnInit {

  private _medida: MedidaModel = new MedidaModel();
  public medidaForm: FormGroup;

  medidas: MedidaModel[];

  constructor(
    private service: MedidaService,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getData()
    this.medidaForm = this._fb.group(
      {
        unidade: ['', Validators.required],
        valor: ['', Validators.required],
      }
    )
  }

  getData(){
    this.service.getMedidas().subscribe(
      medidas => {
        this.medidas = medidas;  
        console.log(this.medidas)             
      },      
      erro => console.error(erro)
    )
  }

  adicionarMedida(formMedida){    
    this._medida.unidade = formMedida.unidade;
    this._medida.valor = formMedida.valor;
    
    console.log(this._medida);
    
    this.service.adicionaMedida(this._medida).subscribe(
    (data: any) => {
      this.getData(); // Executado depois de dar o post
    },      
      (erro) => console.log(erro)      
    );    
    this.medidaForm.reset();
    // this.showNotification(1, this._medida.assunto);
  }

  openConfirmationDialog(medida){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Deseja realmente excluir a medida: " + medida.nome
    });
    dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.removerMedida(medida.id);
          }
        });
  }

  removerMedida(medida){
    this.service.removerMedida(medida).subscribe(
      (data: any) => {
        this.getData()
      },
      (erro) => console.log(erro)
      );
  }

  editarMedida(medida){
    this._router.navigate(['/medida-edit', medida.id])
  }

}
