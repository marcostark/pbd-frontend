import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarcaModel } from 'app/dashboard/model/marca.model';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { ItemModel } from 'app/dashboard/model/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  private _marca: MarcaModel = new MarcaModel();
  private _item: ItemModel = new ItemModel;

  items: ItemModel[];
  marcas: MarcaModel[];
  tipos: TipoProdutoModel[];
  itemForm: FormGroup;
  submitted = false;

  constructor(
    private _router: ActivatedRoute,
    private service: ItemService,
    private formBuilder: FormBuilder,
    private _routerBack: Router,
  ) { }

  ngOnInit() {
    this.getMarcaTipo();
    this.itemForm = this.formBuilder.group({
      marca: ['', Validators.required],
      tipo: ['', Validators.required],
    })

    this._router.paramMap.subscribe(params=> {
      const itemId = params.get('id');
      if(itemId){
        this.buscarItem(itemId);
      }
    })
  }

  
  buscarItem(id){
    // recuperar marca do bd
    this.service.getItem(id).subscribe(
      (tipo: ItemModel) => this.editarItem(tipo),
      (error: any) => console.log(error)        
    );
}

editarItem(item: ItemModel){    
  this._item = item
  this.itemForm.patchValue({
    medida: item.marca,
    nome: item.tipoProduto,
  });
}


  getMarcaTipo(){
    this.service.getMarcaTipo().subscribe(
      responseList => {
        this.marcas = responseList[0]; 
        this.tipos = responseList[1]; 
      },
      erro => console.error(erro)
    )
  }

  
onSubmit(){
  this.submitted = true;
  // stop here if form is invalid
  if (this.itemForm.invalid) {
    return
  }

  this._item.marca = new MarcaModel();
  this._item.marca.id = this.itemForm.value.marca.id;
  this._item.tipoProduto = new TipoProdutoModel();
  this._item.tipoProduto.id = this.itemForm.value.tipo.id;
  
  this.service.editarItem(this._item).subscribe(
    (data: any)=> {
      this._routerBack.navigate(['/item'])
    },
    (erro) => console.log(erro)
  );
  this.itemForm.reset();  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
}

}
