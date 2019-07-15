import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from '../marca.service';
import { MarcaModel } from 'app/dashboard/model/marca.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.scss']
})
export class MarcaFormComponent implements OnInit {

  private _marca: MarcaModel = new MarcaModel();
  public marcaForm: FormGroup;
  submitted = false;

  constructor(
    private _router: ActivatedRoute,
    private _routerBack: Router,
    private service: MarcaService,
    private _fb: FormBuilder,            
  ) { }

  ngOnInit() {
    this.marcaForm = this._fb.group(
      {
        nome: ['', Validators.required],
      }
    )
    this._router.paramMap.subscribe(params=> {
      const marcaId = params.get('id');
      if(marcaId){
        this.buscarMarca(marcaId);
      }
    })
  }

  buscarMarca(id){
      // recuperar marca do bd
      this.service.getMarca(id).subscribe(
        (marca: MarcaModel) => this.editarMarca(marca),
        (error: any) => console.log(error)        
      );
  }

  editarMarca(marca: MarcaModel){    
    this._marca = marca
    this.marcaForm.patchValue({
      nome: marca.nome
    });
  }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.marcaForm.invalid) {
      return
    }
    this._marca.nome = this.marcaForm.value.nome;
    
    console.log(this._marca);

    this.service.editarMarca(this._marca).subscribe(
      (data: any)=> {
        this._routerBack.navigate(['/marca'])
      },
      (erro) => console.log(erro)
    );
    this.marcaForm.reset();  
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioForm.value))      
  }
}
