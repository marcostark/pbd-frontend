import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaModel } from '../dashboard/model/marca.model';
import { LocalModel } from 'app/dashboard/model/local.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  constructor(
    @Inject('LOCAL_ENDPOINT') private localEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getLocais(): Observable<LocalModel[]>{
    return this.httpClient.get<LocalModel[]>(this.localEndpoint)
  }

  getLocal(id: number): Observable<LocalModel> {
    return this.httpClient.get<LocalModel>(this.localEndpoint + id + '/');
  }


 }
