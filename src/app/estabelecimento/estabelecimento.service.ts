import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { EstabelecimentoModel } from '../dashboard/model/estabelecimento.model';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { StorageService } from 'app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    @Inject('ESTABELECIMENTO_ENDPOINT') private estabelecimentoEndpoint: string,
    @Inject('USUARIO_ENDPOINT') private usuarioEndpoint: string,
    @Inject('LOCAL_ENDPOINT') private localEndpoint: string,
    @Inject('TIPO_ESTABELECIMENTO_ENDPOINT') private tipoEstabelecimetoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getEstabelecimentos(): Observable<EstabelecimentoModel[]>{
    return this.httpClient.get<EstabelecimentoModel[]>(this.estabelecimentoEndpoint)
  }

  getEstabelecimento(id: number): Observable<EstabelecimentoModel> {
    return this.httpClient.get<EstabelecimentoModel>(this.estabelecimentoEndpoint + id + '/');
  }

  // TODO resolver problema de CORS
  removerEstabelecimento(id: number): Observable<any> {
    return this.httpClient.delete(this.estabelecimentoEndpoint + `${id}`);
  }

  getCadastroEstabelecimento(): Observable<any> {
    let locais = this.httpClient.get(this.localEndpoint);
    let tipos = this.httpClient.get(this.tipoEstabelecimetoEndpoint);    
    return forkJoin([locais, tipos]);
  }

  adicionarEstabelecimento(estabelecimento: EstabelecimentoModel): Observable<EstabelecimentoModel>{
    return this.httpClient.post<EstabelecimentoModel>(this.estabelecimentoEndpoint, estabelecimento )
  }

  buscaUsuarioPorEmail(email): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(`${this.usuarioEndpoint}email/?value=${email}`)   
  }

 }
