import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecuperarSenhaService } from './recuperar-senha.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  loginForm: FormGroup
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecuperarSenhaService,    
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],      
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    let email = this.loginForm.value.username;
    
    console.log(email)

    this.loading = true;
    this.service.recuperarSenha(email)
    .subscribe(
        response => {
          console.log("Foi!")
        },
        error => {
          // this.showNotification('top','right');          
        })   
}
}
