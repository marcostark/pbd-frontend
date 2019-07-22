import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { UserService } from 'app/services/user.service';
import { StorageService } from 'app/services/storage.service';

declare const $: any;
declare const admin = false;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'dashboard', class: '' },   
    // { path: '/usuario', title: 'Usuario',  icon:'people', class: '' },       
    { path: '/marca', title: 'Marca',  icon:'bookmark', class: '' },
    { path: '/medida', title: 'Medida',  icon:'bubble_chart', class: '' },
    { path: '/tipo-estabelecimento', title: 'Tipo de Estabelecimento',  icon:'shopping_cart', class: '' },
    { path: '/tipo-produto', title: 'Tipo de Produto',  icon:'local_mall', class: '' },
    { path: '/local', title: 'Local',  icon:'local_mall', class: '' },
    { path: '/item', title: 'Item',  icon:'local_mall', class: '' },
    { path: '/produto', title: 'Produto',  icon:'local_mall', class: '' },
    { path: '/estabelecimento', title: 'Estabelecimento',  icon:'local_mall', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Mapa',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  usuario: UsuarioModel;
  admin: boolean; 

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _user: UserService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.buscaUsuarioPoremail(localUser.email);
    }else{
      //Acesso não autorizado! Redirecionar para a pagina de login
      console.log("Redirecionando para a pagina de login")
    }      
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  buscaUsuarioPoremail(email: string){   
    this._user.buscaUsuarioPorEmail(email).subscribe(
      usuario => {
        this.usuario = usuario  
        if(this.usuario.perfis[1]){
          this.admin = true
        }
        console.log(this.usuario)
      },
      error => {}
    )
  }


  logout(){    
    this.authenticationService.logout();
    this.router.navigate(['/login']);        
}
}
