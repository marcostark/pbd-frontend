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

  adicionaMedida(medida: MedidaModel): Observable<MedidaModel> {
    return this.httpClient.post<MedidaModel>(this.medidaEndpoint, medida);
  }

  editarMedida(medida: any):  Observable<MedidaModel> {    
    return this.httpClient.put<MedidaModel>(this.medidaEndpoint + medida.id + '/', medida);    
  }

  removerMedida(id: number) {
    return this.httpClient.delete(this.medidaEndpoint + `${id}`);
  }
}
