import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from 'app/dashboard/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService { 

  constructor(
    @Inject('PRODUTO_ENDPOINT') private produtoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getProdutos(): Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(this.produtoEndpoint)
  }

  getProduto(id: number): Observable<ProdutoModel> {
    return this.httpClient.get<ProdutoModel>(this.produtoEndpoint + id + '/');
  }

}
