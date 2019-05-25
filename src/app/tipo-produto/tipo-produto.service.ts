import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProdutoModel } from '../dashboard/model/tipo-produto.model';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {

  constructor(
    @Inject('TIPO_PRODUTO_ENDPOINT') private tipoProdutoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getTiposProdutos(): Observable<TipoProdutoModel[]>{
    return this.httpClient.get<TipoProdutoModel[]>(this.tipoProdutoEndpoint)
  }

  getTipoProduto(id: number): Observable<TipoProdutoModel> {
    return this.httpClient.get<TipoProdutoModel>(this.tipoProdutoEndpoint + id + '/');
  }

}
