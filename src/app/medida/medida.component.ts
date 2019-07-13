import { Component, OnInit } from '@angular/core';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { MedidaService } from './medida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  openConfirmationDialog() {
    console.log("Remover");
  }

  editarMedida(medida){
    console.log(medida);
  }

}
