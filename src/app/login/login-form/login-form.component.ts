import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CredenciaisModel } from 'app/dashboard/model/credenciais.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup
  loading = false;
  submitted = false;
  returnUrl: string;

  private credenciais: CredenciaisModel = new CredenciaisModel();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // 
  
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.credenciais.email = this.loginForm.value.username;
    this.credenciais.senha = this.loginForm.value.password;
    console.log(this.credenciais)

    this.authenticationService.login(this.credenciais)
    .subscribe(
        response => {
          //console.log(response.headers.get('Authorization'));   
          this.authenticationService.sucessfullLogin(response.headers.get('Authorization'));
        },
        error => {})   
}

}
