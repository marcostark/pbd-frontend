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
    private htttpClient: HttpClient
  ) { }

  getTipos(): Observable<TipoEstabelecimentoModel[]> {
    return this.htttpClient.get<TipoEstabelecimentoModel[]>(this.tipoEndpoint);
  }

  getTipo(id: number): Observable<TipoEstabelecimentoModel> {
    return this.htttpClient.get<TipoEstabelecimentoModel>(this.tipoEndpoint + id + '/');
  }

}