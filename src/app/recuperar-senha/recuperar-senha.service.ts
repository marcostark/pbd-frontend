import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  constructor(
    @Inject('RECUPERAR_SENHA_ENDPOINT') private recuperarSenhaEndpoint: string,
    private httpClient: HttpClient
  ) { }

  recuperarSenha(email: string): Observable<any> {
    return this.httpClient.get(this.recuperarSenhaEndpoint + email);
  }

}
