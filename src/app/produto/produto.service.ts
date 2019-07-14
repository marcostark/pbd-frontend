import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { ProdutoModel } from 'app/dashboard/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService { 

  constructor(
    @Inject('PRODUTO_ENDPOINT') private produtoEndpoint: string,
    @Inject('ITEM_ENDPOINT') private itemEndpoint: string,
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    @Inject('ESTABELECIMENTO_ENDPOINT') private estabelecimentoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getProdutos(): Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(this.produtoEndpoint)
  }

  getProduto(id: number): Observable<ProdutoModel> {
    return this.httpClient.get<ProdutoModel>(this.produtoEndpoint + id + '/');
  }

  getCadastroProduto(): Observable<any> {
    let items = this.httpClient.get(this.itemEndpoint);
    let usuarios = this.httpClient.get(this.usuarioEndpoint);
    let estabelecimentos = this.httpClient.get(this.estabelecimentoEndpoint);
    // return this.httpClient.get<MedidaModel>(this.medidaEndpoint)
    return forkJoin([items, usuarios, estabelecimentos]);
  }

  adicionarProduto(produto: ProdutoModel): Observable<ProdutoModel>{
    return this.httpClient.post<ProdutoModel>(this.produtoEndpoint, produto )
  }

}
