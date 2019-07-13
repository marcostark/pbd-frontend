import { Component, OnInit } from '@angular/core';
import { LocalModel } from 'app/dashboard/model/local.model';
import { LocalService } from './local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  locais: LocalModel[];

  constructor(
    private service: LocalService
  ) {}

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getLocais().subscribe(
      locais => {
        this.locais = locais;
        console.log(locais)
      },
      (erro) => console.error(erro)
    )
  }

}
