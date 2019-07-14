import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoModel } from 'app/dashboard/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: ProdutoModel[];

  constructor(
    private service: ProdutoService
  ) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.service.getProdutos().subscribe(
      produtos => {
        this.produtos = produtos;    
        console.log(this.produtos)     
      },
      (erro) => console.error(erro)
    )
  }


}
