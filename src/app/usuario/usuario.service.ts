import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getUsuarios(): Observable<UsuarioModel[]>{
    return this.httpClient.get<UsuarioModel[]>(this.usuarioEndpoint)
  }

  getUsuario(id: number): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(this.usuarioEndpoint + id + '/');
  }

  adicionarUsuario(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.httpClient.post<UsuarioModel>(this.usuarioEndpoint, usuario)
  }

}
