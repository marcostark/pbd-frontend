import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MedidaService } from '../medida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MedidaModel } from 'app/dashboard/model/medida.model';

@Component({
  selector: 'app-medida-form',
  templateUrl: './medida-form.component.html',
  styleUrls: ['./medida-form.component.scss']
})
export class MedidaFormComponent implements OnInit {

  public medidaForm: FormGroup;
  private _medida: MedidaModel = new MedidaModel();  
  submitted = false;

  constructor(
    private _router: ActivatedRoute,
    private service: MedidaService, 
    private _fb: FormBuilder,   
    private _routerBack: Router,
  ) { }

  ngOnInit() {
    this.medidaForm = this._fb.group(
      {
        unidade: ['', Validators.required],
        valor: ['', Validators.required],
      }
    )
    this._router.paramMap.subscribe(params=> {
      const medidaId = params.get('id');
      if(medidaId){
        this.buscarMedida(medidaId);
      }
    })
  }

  buscarMedida(id){
    // recuperar marca do bd
    this.service.getMedida(id).subscribe(
      (medida: MedidaModel) => this.editarMarca(medida),
      (error: any) => console.log(error)        
    );
}

editarMarca(medida: MedidaModel){    
  this._medida = medida
  this.medidaForm.patchValue({
    nome: medida.unidade,
    valor: medida.valor
  });
}

onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.medidaForm.invalid) {
    return
  }
  this._medida.unidade = this.medidaForm.value.unidade;
  this._medida.valor = this.medidaForm.value.valor;
  
  console.log(this._medida);

  this.service.editarMedida(this._medida).subscribe(
    (data: any)=> {
      this._routerBack.navigate(['/medida'])
    },
    (erro) => console.log(erro)
  );
  this.medidaForm.reset();  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
}

}
