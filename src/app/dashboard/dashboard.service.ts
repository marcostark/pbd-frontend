import { Injectable, Inject } from '@angular/core';
import { LocalModel } from './model/local.model';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './model/usuario.model';
import { EstabelecimentoModel } from './model/estabelecimento.model';
import { ProdutoModel } from './model/produto.model';
import { TipoProdutoModel } from './model/tipo-produto.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    @Inject('LOCAL_ENDPOINT') private localEndpoint: string,
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    @Inject('PRODUTO_ENDPOINT') private produtoEndpoint: string,
    @Inject('ESTABELECIMENTO_ENDPOINT') private estabelecimentoEndpoint: string,
    @Inject('TIPO_PRODUTO_ENDPOINT') private tipoProdutoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getLocais(): Observable<LocalModel[]>{
    return this.httpClient.get<LocalModel[]>(this.localEndpoint)
  }

  getUsuarios(): Observable<UsuarioModel[]> {
    return this.httpClient.get<UsuarioModel[]>(this.usuarioEndpoint);
  }

  getEstabelecimentos(): Observable<EstabelecimentoModel[]> {
    return this.httpClient.get<EstabelecimentoModel[]>(this.estabelecimentoEndpoint);
  }

  getProdutos(): Observable<ProdutoModel[]> {
    return this.httpClient.get<ProdutoModel[]>(this.produtoEndpoint);
  }

  getTipoProdutos(): Observable<TipoProdutoModel[]> {
    return this.httpClient.get<TipoProdutoModel[]>(this.tipoProdutoEndpoint);
  }

  getUsuarioLocalProduto(): Observable<any>{
    let response1 = this.httpClient.get(this.usuarioEndpoint);
    let response2 = this.httpClient.get(this.localEndpoint);
    let response3 = this.httpClient.get(this.produtoEndpoint);    
    return forkJoin([response1, response2, response3]);
  }


}
