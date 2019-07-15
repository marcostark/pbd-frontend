import { Component, OnInit } from '@angular/core';
import { LocalModel } from 'app/dashboard/model/local.model';
import { LocalService } from './local.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  private _local: LocalModel = new LocalModel()
  locais: LocalModel[];
  localForm: FormGroup;
  usuarios: UsuarioModel[];
  submitted = false;

  constructor(
    private service: LocalService,
    private formBuilder: FormBuilder, 
  ) {}

  ngOnInit() {
    this.getData()
    this.localForm = this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        nome: ['', Validators.required],
      }
    );
  }

  getData(){
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
    this._local.nome = this.localForm.value.nome;
    //this._local.usuarios = this.localForm.value.usuarios;
    
    console.log(this._local);
  
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
