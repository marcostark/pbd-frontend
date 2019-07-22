import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CredenciaisModel } from 'app/dashboard/model/credenciais.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

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
  hide = true;

  private credenciais: CredenciaisModel = new CredenciaisModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,    
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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

    this.loading = true;
    this.authenticationService.login(this.credenciais)
    .subscribe(
        response => {
          console.log(this.returnUrl);
          this.authenticationService.sucessfullLogin(response.headers.get('Authorization'));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.showNotification('top','right');
          this.loading = false;
        })   
}

showNotification(from, align){
  const type = ['','info','success','warning','danger'];

  //const color = Math.floor((Math.random() * 4) + 1);

  $.notify({
      icon: "notifications",
      message: "Impossível fazer login com as credenciais fornecidas !"

  },{
      type: type[4],
      timer: 4000,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}

}
