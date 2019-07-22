import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecuperarSenhaService } from './recuperar-senha.service';
declare var $: any;

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  forgotForm: FormGroup
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecuperarSenhaService,
  ) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.forgotForm.invalid) {
      return;
    }
    let email = this.forgotForm.value.email;

    console.log(email)

    this.loading = true;
    this.service.recuperarSenha(email)
    .subscribe(
        response => {
          console.log("Foi!")
          this.showNotification('top','right','Senha enviada com sucesso, verifique seu email!','success');
          this.router.navigate(['/login']);
        },
        error => {
          this.showNotification('top','right','Verifique as informações !','danger');
          this.loading = false;                    
        })   
  }

  voltar(){
    this.router.navigate(['/login']);
  }

  showNotification(from, align, msg, type){
   //const type = ['','info','success','warning','danger'];
  
    //const color = Math.floor((Math.random() * 4) + 1);
  
    $.notify({
        icon: "notifications",
        message: msg
  
    },{
        type: type,
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
