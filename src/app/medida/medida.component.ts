import { Component, OnInit } from '@angular/core';
import { MedidaModel } from 'app/dashboard/model/medida.model';
import { MedidaService } from './medida.service';

@Component({
  selector: 'app-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.scss']
})
export class MedidaComponent implements OnInit {

  medidas: MedidaModel[];

  constructor(
    private service: MedidaService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getMedidas().subscribe(
      medidas => {
        this.medidas = medidas;  
        console.log(this.medidas)             
      },      
      erro => console.error(erro)
    )
  }

}
