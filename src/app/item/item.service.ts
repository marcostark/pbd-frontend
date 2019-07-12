import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../dashboard/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService { 

  constructor(
    @Inject('ITEM_ENDPOINT') private itemEndpoint: string,
    private httpClient: HttpClient
  ) { }

  getItens(): Observable<ItemModel[]>{
    return this.httpClient.get<ItemModel[]>(this.itemEndpoint)
  }

  getItem(id: number): Observable<ItemModel> {
    return this.httpClient.get<ItemModel>(this.itemEndpoint + id + '/');
  }


}
