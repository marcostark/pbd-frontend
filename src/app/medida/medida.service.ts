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
    private htttpClient: HttpClient
  ) { }

  getMedidas(): Observable<MedidaModel[]> {
    return this.htttpClient.get<MedidaModel[]>(this.medidaEndpoint);
  }

  getMedida(id: number): Observable<MedidaModel> {
    return this.htttpClient.get<MedidaModel>(this.medidaEndpoint + id + '/');
  }
}
