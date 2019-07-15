import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { LocalModel } from 'app/dashboard/model/local.model';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  private _local: LocalModel = new LocalModel();

  localForm: FormGroup;
  usuarios: UsuarioModel[];
  submitted = false;

  constructor(
    private _router: ActivatedRoute,
    private service: LocalService,
    private formBuilder: FormBuilder, 
    private _routerBack: Router
  ) { }

  ngOnInit() {
    this.getUsuarios()
    this.localForm = this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        nome: ['', Validators.required],
      }
    );
    this._router.paramMap.subscribe(params=> {
      const localId = params.get('id');
      if(localId){
        this.buscarLocal(localId);
      }
    })
  }

  
  buscarLocal(id){
    // recuperar marca do bd
    this.service.getLocal(id).subscribe(
      (local: LocalModel) => this.editarLocal(local),
      (error: any) => console.log(error)        
    );
}

editarLocal(local: LocalModel){    
  console.log(local);
  // this._local = local
  // this.localProdutoForm.patchValue({
  //   medida: local.medida,
  //   nome: local.nome,
  // });
}

  getUsuarios(){
    this.service.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        console.log(usuarios)
      },
      (erro) => console.error(erro)
    )
  }

  

  onSubmit(){
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.localForm.invalid) {
      return
    }
    // this._local.nome = this.localForm.value.nome;
    //this._local.usuarios = this.localForm.value.usuarios;
    
    console.log(this.localForm.value);
  
    // this.service.adicionarLocal(this._local).subscribe(
    //   (data: any)=> {
    //     this.getData();
    //   },
    //   (erro) => console.log(erro)
    // );
    // this.localForm.reset();  
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.localForm.value))      
  }

}
