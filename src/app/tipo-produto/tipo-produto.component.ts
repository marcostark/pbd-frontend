import { Component, OnInit } from '@angular/core';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { TipoProdutoService } from './tipo-produto.service';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrls: ['./tipo-produto.component.scss']
})
export class TipoProdutoComponent implements OnInit {

  tiposProdutos: TipoProdutoModel[];

  constructor(
    private service: TipoProdutoService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getTiposProdutos().subscribe(
      tiposProdutos => {
        this.tiposProdutos = tiposProdutos;  
        console.log(this.tiposProdutos)             
      },      
      erro => console.error(erro)
    )
  }

}
