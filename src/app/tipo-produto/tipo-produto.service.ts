import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { TipoProdutoModel } from '../dashboard/model/tipo-produto.model';
import { MedidaModel } from 'app/dashboard/model/medida.model';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {

  constructor(
    @Inject('TIPO_PRODUTO_ENDPOINT') private tipoProdutoEndpoint: string,
    @Inject('MEDIDA_ENDPOINT') private medidaEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getTiposProdutos(): Observable<TipoProdutoModel[]>{
    return this.httpClient.get<TipoProdutoModel[]>(this.tipoProdutoEndpoint)
  }

  getTipoProduto(id: number): Observable<TipoProdutoModel> {
    return this.httpClient.get<TipoProdutoModel>(this.tipoProdutoEndpoint + id + '/');
  }

  getTipoProdutoMedida(): Observable<any>{
    let response1 = this.httpClient.get(this.medidaEndpoint);
    let response2 = this.httpClient.get(this.tipoProdutoEndpoint);
    // return this.httpClient.get<MedidaModel>(this.medidaEndpoint)
    return forkJoin([response1, response2]);
  }

  adicionarTipoProduto(tipoProduto: TipoProdutoModel): Observable<TipoProdutoModel> {
    return this.httpClient.post<TipoProdutoModel>(this.tipoProdutoEndpoint, tipoProduto);
  }

}
