import { Component, OnInit } from '@angular/core';
import { EstabelecimentoModel } from 'app/dashboard/model/estabelecimento.model';
import { EstabelecimentoService } from './estabelecimento.service';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos: EstabelecimentoModel[];

  constructor(
    private service: EstabelecimentoService
  ) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.service.getEstabelecimentos().subscribe(
      estabelecimentos => {
        this.estabelecimentos = estabelecimentos;    
        console.log(this.estabelecimentos)     
      },
      (erro) => console.error(erro)
    )
  }


}
