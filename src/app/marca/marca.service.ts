import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaModel } from '../dashboard/model/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    @Inject('MARCA_ENDPOINT') private marcaEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getMarcas(): Observable<MarcaModel[]> {
    return this.httpClient.get<MarcaModel[]>(this.marcaEndpoint);
  }

  getMarca(id: number): Observable<MarcaModel> {
    return this.httpClient.get<MarcaModel>(this.marcaEndpoint + id + '/');
  }

  adicionarMarca(marca: any):  Observable<MarcaModel> {    
    return this.httpClient.post<MarcaModel>(this.marcaEndpoint, marca);    
  }

  // TODO resolver problema de CORS
  removerMarca(id: number): Observable<any> {
    return this.httpClient.delete(this.marcaEndpoint + `${id}`);
  }
}
