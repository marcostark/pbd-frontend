import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { ItemModel } from 'app/dashboard/model/item.model';
import { EstabelecimentoModel } from 'app/dashboard/model/estabelecimento.model';
import { EstabelecimentoService } from 'app/estabelecimento/estabelecimento.service';
import { ProdutoService } from '../produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  items: ItemModel[];
  usuarios: UsuarioModel[];
  estabelecimentos: EstabelecimentoModel[];
  produtoForm: FormGroup;

  constructor(
    private service: ProdutoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getData()
    this.produtoForm = this.formBuilder.group(
      {
        item: ['', Validators.required],
        usuario: ['', Validators.required],
        estabelecimento: ['', Validators.required],
        data: ['', Validators.required],
        valor: ['', Validators.required],
      }
    );
  }

  getData() {
    this.service.getCadastroProduto().subscribe(
      responseList => {
        this.items = responseList[0];
        this.usuarios = responseList[1];
        this.estabelecimentos = responseList[2];
        console.log(responseList)
      },
      erro => console.error(erro)
    )
  }

}
