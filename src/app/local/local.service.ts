import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaModel } from '../dashboard/model/marca.model';
import { LocalModel } from 'app/dashboard/model/local.model';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  constructor(
    @Inject('LOCAL_ENDPOINT') private localEndpoint: string,
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getLocais(): Observable<LocalModel[]>{
    return this.httpClient.get<LocalModel[]>(this.localEndpoint)
  }

  getLocal(id: number): Observable<LocalModel> {
    return this.httpClient.get<LocalModel>(this.localEndpoint + id + '/');
  }

  getUsuarios(): Observable<UsuarioModel[]>{
    return this.httpClient.get<UsuarioModel[]>(this.usuarioEndpoint)
  }

  editarMedida(local: any):  Observable<LocalModel> {    
    return this.httpClient.put<LocalModel>(this.localEndpoint + local.id + '/', local);    
  }

  removerLocal(id: number): Observable<any>{
    return this.httpClient.delete(this.localEndpoint + `${id}`);
  }

 }
