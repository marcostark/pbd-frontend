import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { ItemModel } from '../dashboard/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService { 

  constructor(
    @Inject('ITEM_ENDPOINT') private itemEndpoint: string,
    @Inject('MARCA_ENDPOINT') private marcaEndpoint: string,
    @Inject('TIPO_PRODUTO_ENDPOINT') private tipoEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getItens(): Observable<ItemModel[]>{
    return this.httpClient.get<ItemModel[]>(this.itemEndpoint)
  }

  getItem(id: number): Observable<ItemModel> {
    return this.httpClient.get<ItemModel>(this.itemEndpoint + id + '/');
  }

  adicionarItem(item: ItemModel): Observable<ItemModel> {
    return this.httpClient.post<ItemModel>(this.itemEndpoint, item);
  }

  editarItem(item: any):  Observable<ItemModel> {    
    return this.httpClient.put<ItemModel>(this.itemEndpoint + item.id + '/', item);    
  }

  getMarcaTipo(): Observable<any>{
    let response1 = this.httpClient.get(this.marcaEndpoint);
    let response2 = this.httpClient.get(this.tipoEndpoint);    
    return forkJoin([response1, response2]);
  }

  removerItem(id: number): Observable<any>{
    return this.httpClient.delete(this.itemEndpoint + `${id}`);
  }


}
