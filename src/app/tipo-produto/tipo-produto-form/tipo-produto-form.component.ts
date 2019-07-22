import { Component, OnInit } from '@angular/core';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoProdutoService } from '../tipo-produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'app/services/storage.service';
import { UserService } from 'app/services/user.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Component({
  selector: 'app-tipo-produto-form',
  templateUrl: './tipo-produto-form.component.html',
  styleUrls: ['./tipo-produto-form.component.scss']
})
export class TipoProdutoFormComponent implements OnInit {
  
  medidas: MedidaModel[];
  tipoProdutoForm: FormGroup;
  submitted = false;

  private _tipo: TipoProdutoModel = new TipoProdutoModel();
  medida: MedidaModel = new MedidaModel();

  constructor(
    private _router: ActivatedRoute,
    private service: TipoProdutoService,
    private formBuilder: FormBuilder,    
    private _routerBack: Router,
  ) { }

  ngOnInit() {    
    this.getData();
    this.tipoProdutoForm = this.formBuilder.group(
      {
        medida: ['', Validators.required],
        nome: ['', Validators.required],
      }
    );
    this._router.paramMap.subscribe(params=> {
      const tipoId = params.get('id');
      if(tipoId){
        this.buscarMedida(tipoId);
      }
    })
  }

  getData(){   
    this.service.getMedidas().subscribe(
      medidas => {
        this.medidas = medidas;
      },
      erro => console.error(erro)
    )
  }

  buscarMedida(id){
    // recuperar marca do bd
    this.service.getTipoProduto(id).subscribe(
      (tipo: TipoProdutoModel) => this.editarTipo(tipo),
      (error: any) => console.log(error)        
    );
}

editarTipo(tipo: TipoProdutoModel){    
  this._tipo = tipo
  this.tipoProdutoForm.patchValue({
    medida: tipo.medida,
    nome: tipo.nome,
  });
}

onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.tipoProdutoForm.invalid) {
    return
  }
  this._tipo.medida = this.tipoProdutoForm.value.medida;
  this._tipo.nome = this.tipoProdutoForm.value.nome;
  
  console.log(this._tipo);

  this.service.editarTipo(this._tipo).subscribe(
    (data: any)=> {
      this._routerBack.navigate(['/tipo-produto'])
    },
    (erro) => console.log(erro)
  );
  this.tipoProdutoForm.reset();  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
}

}
