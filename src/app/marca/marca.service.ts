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
    private htttpClient: HttpClient
  ) { }

  getMarcas(): Observable<MarcaModel[]> {
    return this.htttpClient.get<MarcaModel[]>(this.marcaEndpoint);
  }

  getMarca(id: number): Observable<MarcaModel> {
    return this.htttpClient.get<MarcaModel>(this.marcaEndpoint + id + '/');
  }
}
