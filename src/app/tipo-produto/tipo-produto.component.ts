import { Component, OnInit } from '@angular/core';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { TipoProdutoService } from './tipo-produto.service';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrls: ['./tipo-produto.component.scss']
})
export class TipoProdutoComponent implements OnInit {

  tiposProdutos: TipoProdutoModel[];
  medidas: MedidaModel[];
  tipoProdutoForm: FormGroup

  tipoProduto: TipoProdutoModel = new TipoProdutoModel();
  medida: MedidaModel = new MedidaModel();

  constructor(
    private service: TipoProdutoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getData()
    this.tipoProdutoForm = this.formBuilder.group(
      {
        medida: ['', Validators],
        nome: ['', Validators],
      }
    );
  }

  adicionarTipoProduto(form){
    this.medida = form.medida
    this.tipoProduto.nome = form.nome
    this.tipoProduto.medida = this.medida

    this.service.adicionarTipoProduto(this.tipoProduto).subscribe(
      (data: any)=> {
        this.getData();
      },
      (erro) => console.log(erro)
    );
    this.tipoProdutoForm.reset();  
  }

  getData(){   
    this.service.getTipoProdutoMedida().subscribe(
      responseList => {
        this.medidas = responseList[0]; 
        this.tiposProdutos = responseList[1]; 
      },
      erro => console.error(erro)
    )
  }
}
