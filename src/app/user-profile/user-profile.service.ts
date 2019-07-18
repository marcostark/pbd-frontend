import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { StorageService } from 'app/services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    private httpClient: HttpClient,
    public storage: StorageService,
  ) {}

  buscaUsuarioPorEmail(email: string): Observable<UsuarioModel> {

    let token = this.storage.getLocalUser().token;
    let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token})

    return this.httpClient.get<UsuarioModel>(`${this.usuarioEndpoint}email/?value=${email}`)

    // this.httpClient.get<UsuarioModel>(`${this.usuarioEndpoint}/usuarios/email?values=${email}`,
    // {'headers': authHeader})

  }

}
