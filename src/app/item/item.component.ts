import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'app/dashboard/model/item.model';
import { ItemService } from './item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoProdutoModel } from 'app/dashboard/model/tipo-produto.model';
import { MarcaModel } from 'app/dashboard/model/marca.model';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  private _marca: MarcaModel = new MarcaModel();
  private _tipo: TipoProdutoModel = new TipoProdutoModel();
  private _item: ItemModel = new ItemModel;

  items: ItemModel[];
  marcas: MarcaModel[];
  tipos: TipoProdutoModel[];
  itemForm: FormGroup;
  submitted = false;

  constructor(
    private service: ItemService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getdata();
    this.getMarcaTipo();
    this.itemForm = this.formBuilder.group({
      marca: ['', Validators.required],
      tipo: ['', Validators.required],
    })
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
  
  this.service.adicionarItem(this._item).subscribe(
    (data: any)=> {
      this.getdata()
    },
    (erro) => console.log(erro)
  );
  this.itemForm.reset();  
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
}

openConfirmationDialog(item){
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '450px',
    data: "Deseja realmente excluir item" 
  });
  dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.removerItem(item.id);
        }
      });
}

editarItem(item){
  this._router.navigate(['/item-edit', item.id])
}


removerItem(item){
  this.service.removerItem(item).subscribe(
    (data: any) => {
      this.getdata()
    },
    (erro) => console.log(erro)
    );
}


}
