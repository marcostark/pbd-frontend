import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'app/dashboard/model/item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: ItemModel[];

  constructor(
    private service: ItemService
  ) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.service.getItens().subscribe(
      items => {
        this.items = items;    
        console.log(this.items)     
      },
      (erro) => console.error(erro)
    )
  }

}
