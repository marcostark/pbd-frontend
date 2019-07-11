import { Injectable, Inject } from '@angular/core';
import { TipoEstabelecimentoModel } from 'app/dashboard/model/tipo-estabelecimento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoEstabelecimentoService {
  constructor(
    @Inject('TIPO_ESTABELECIMENTO_ENDPOINT') private tipoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getTipos(): Observable<TipoEstabelecimentoModel[]> {
    return this.httpClient.get<TipoEstabelecimentoModel[]>(this.tipoEndpoint);
  }

  getTipo(id: number): Observable<TipoEstabelecimentoModel> {
    return this.httpClient.get<TipoEstabelecimentoModel>(this.tipoEndpoint + id + '/');
  }
   
  adicionarTipo(_tipoEstabelecimento: TipoEstabelecimentoModel): Observable<TipoEstabelecimentoModel> {
    return this.httpClient.post<TipoEstabelecimentoModel>(this.tipoEndpoint, _tipoEstabelecimento);
  }

  // TODO resolver problema de CORS
  removerTipo(id: number): Observable<any> {
    return this.httpClient.delete(this.tipoEndpoint + `${id}`);
  }


}