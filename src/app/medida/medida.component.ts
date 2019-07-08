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
  public marcaForm: FormGroup;

  medidas: MedidaModel[];

  constructor(
    private service: MedidaService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getData()
    // this.marcaForm = this._fb.group(
    //   {
    //     nome: ['', Validators.required],
    //   }
    // )
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

  adicionarMarca(formMedida){
    // this._medida.nome = formMarca.nome;
    
    // console.log(this._medida);
    
    // this.service.adicionarMarca(this._medida).subscribe(
    // (data: any) => {
    //   this.getData(); // Executado depois de dar o post
    // },      
    //   (erro) => console.log(erro)      
    // );    
    // this.marcaForm.reset();
    // this.showNotification(1, this._medida.assunto);
  }

  openConfirmationDialog() {
    console.log("Remover");
  }

  editarMedida(medida){
    console.log(medida);
  }

}
