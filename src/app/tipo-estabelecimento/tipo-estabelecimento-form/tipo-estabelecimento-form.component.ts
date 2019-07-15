import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoEstabelecimentoModel } from 'app/dashboard/model/tipo-estabelecimento.model';
import { TipoEstabelecimentoService } from '../tipo-estabelecimento.service';

@Component({
  selector: 'app-tipo-estabelecimento-form',
  templateUrl: './tipo-estabelecimento-form.component.html',
  styleUrls: ['./tipo-estabelecimento-form.component.scss']
})
export class TipoEstabelecimentoFormComponent implements OnInit {

  public tipoEstabelecimentoForm: FormGroup;
  private _tipo: TipoEstabelecimentoModel = new TipoEstabelecimentoModel();  
  submitted = false;
  
  constructor(
    private _router: ActivatedRoute,
    private service: TipoEstabelecimentoService, 
    private _fb: FormBuilder,   
    private _routerBack: Router,
  ) { }

  ngOnInit() {
    this.tipoEstabelecimentoForm = this._fb.group(
      {
        nome:['', Validators.required],
      }
    )
    this._router.paramMap.subscribe(params=> {
      const tipoId = params.get('id');
      if(tipoId){
        this.buscarMedida(tipoId);
      }
    })
  }

  buscarMedida(id){
    // recuperar marca do bd
    this.service.getTipo(id).subscribe(
      (tipo: TipoEstabelecimentoModel) => this.editarMarca(tipo),
      (error: any) => console.log(error)        
    );
}

editarMarca(tipo: TipoEstabelecimentoModel){    
  this._tipo = tipo
  this.tipoEstabelecimentoForm.patchValue({
    nome: tipo.nome,
  });
}

onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.tipoEstabelecimentoForm.invalid) {
    return
  }
  this._tipo.nome = this.tipoEstabelecimentoForm.value.nome;
  
  console.log(this._tipo);

  this.service.editarTipo(this._tipo).subscribe(
    (data: any)=> {
      this._routerBack.navigate(['/tipo-estabelecimento'])
    },
    (erro) => console.log(erro)
  );
  this.tipoEstabelecimentoForm.reset();  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
}

}
