import { Component, OnInit } from '@angular/core';
import { MarcaService } from './marca.service';
import { MarcaModel } from 'app/dashboard/model/marca.model';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  marcas: MarcaModel[];

  constructor(
    private service: MarcaService
  ) { }

  ngOnInit() {
    this.getData();     
  }

  getData(){
    this.service.getMarcas().subscribe(
      marcas => {
        this.marcas = marcas;  
        console.log(this.marcas)             
      },      
      erro => console.error(erro)
    )
  }

}
