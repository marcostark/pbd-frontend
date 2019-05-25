import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedidaModel } from '../dashboard/model/medida.model';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  constructor(
    @Inject('MEDIDA_ENDPOINT') private medidaEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getMedidas(): Observable<MedidaModel[]> {
    return this.httpClient.get<MedidaModel[]>(this.medidaEndpoint);
  }

  getMedida(id: number): Observable<MedidaModel> {
    return this.httpClient.get<MedidaModel>(this.medidaEndpoint + id + '/');
  }
}
