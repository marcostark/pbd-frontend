import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstabelecimentoModel } from '../dashboard/model/estabelecimento.model';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    @Inject('ESTABELECIMENTO_ENDPOINT') private estabelecimentoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getEstabelecimentos(): Observable<EstabelecimentoModel[]>{
    return this.httpClient.get<EstabelecimentoModel[]>(this.estabelecimentoEndpoint)
  }

  getEstabelecimento(id: number): Observable<EstabelecimentoModel> {
    return this.httpClient.get<EstabelecimentoModel>(this.estabelecimentoEndpoint + id + '/');
  }

  // TODO resolver problema de CORS
  removerEstabelecimento(id: number): Observable<any> {
    return this.httpClient.delete(this.estabelecimentoEndpoint + `${id}`);
  }

 }
