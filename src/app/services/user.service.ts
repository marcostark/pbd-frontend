import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisModel } from 'app/dashboard/model/credenciais.model';
import { Observable } from 'rxjs';
import { Session } from 'app/dashboard/model/session.model';
import { StorageService } from './storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(        
        private httpClient: HttpClient,
        @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,            
        ) {
    }

    buscaUsuarioPorEmail(email): Observable<UsuarioModel> {
        return this.httpClient.get<UsuarioModel>(`${this.usuarioEndpoint}email/?value=${email}`)   
    }  
   
}
