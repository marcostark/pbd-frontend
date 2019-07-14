import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from 'app/login/session.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,    
        private sessionService: SessionService,        
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {        
        this.sessionService.load();
        const currentUser = this.sessionService.isLoged();                        
        if (currentUser) {
            // Autorizado, retorna true
            return true;
        }

        // caso não esteja logado, será redirecionado para a página de login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
 }
}