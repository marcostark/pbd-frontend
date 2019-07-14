import { Component, OnInit } from '@angular/core';
import { EstabelecimentoModel } from 'app/dashboard/model/estabelecimento.model';
import { LocalModel } from 'app/dashboard/model/local.model';
import { TipoEstabelecimentoModel } from 'app/dashboard/model/tipo-estabelecimento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstabelecimentoService } from '../estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-form',
  templateUrl: './estabelecimento-form.component.html',
  styleUrls: ['./estabelecimento-form.component.scss']
})
export class EstabelecimentoFormComponent implements OnInit {

  estabelecimento: EstabelecimentoModel = new EstabelecimentoModel()
  
  locais: LocalModel[];
  tipos: TipoEstabelecimentoModel[];
  
  estabelecimentoForm: FormGroup;

  constructor(
    private service: EstabelecimentoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getData()
    this.estabelecimentoForm = this.formBuilder.group(
      {
        local: ['', Validators.required],
        tipo: ['', Validators.required],
        nome: ['', Validators.required],
      }
    );
  }

  getData() {
    this.service.getCadastroEstabelecimento().subscribe(
      responseList => {
        this.locais = responseList[0];
        this.tipos = responseList[1];                
      },
      erro => console.error(erro)
    )
  }

  cadastrarEstabelecimento(form){
    this.estabelecimento.nome = form.nome
    this.estabelecimento.local = new LocalModel()
    this.estabelecimento.local.id = form.local.id
    this.estabelecimento.tipoEstabelecimento = new TipoEstabelecimentoModel()
    this.estabelecimento.tipoEstabelecimento.id = form.tipo.id
    
    console.log(this.estabelecimento)
    this.service.adicionarEstabelecimento(this.estabelecimento).subscribe(
      (data: any) => {
        this.getData(); // Executado depois de dar o post
      },      
        (erro) => console.log(erro)      
      );    
      this.estabelecimentoForm.reset();
  }

}
