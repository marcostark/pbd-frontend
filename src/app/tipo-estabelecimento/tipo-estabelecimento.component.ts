import { Component, OnInit } from '@angular/core';
import { TipoEstabelecimentoService } from './tipo-estabelecimento.service';
import { TipoEstabelecimentoModel } from 'app/dashboard/model/tipo-estabelecimento.model';

@Component({
  selector: 'app-tipo-estabelecimento',
  templateUrl: './tipo-estabelecimento.component.html',
  styleUrls: ['./tipo-estabelecimento.component.scss']
})
export class TipoEstabelecimentoComponent implements OnInit {
  
  tiposEstabelecimentos: TipoEstabelecimentoModel[];

  constructor(
    private service: TipoEstabelecimentoService
  ) { }

  ngOnInit() {
    console.log("hello")
    this.getData()
  }

  getData(){
    this.service.getTipos().subscribe(
      tiposEstabelecimentos => {
        this.tiposEstabelecimentos = tiposEstabelecimentos;  
        console.log(this.tiposEstabelecimentos)             
      },      
      erro => console.error(erro)
    )
  }

}
