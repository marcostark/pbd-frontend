import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from 'app/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: StorageService        
    ) {
        console.log("VAI CARAI")
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("chamaNDO")
        const currentUser = this.authenticationService.getLocalUser();
        if (currentUser) {
            // authorised so return true
            console.log("Autorizado")
            return true;

        }

        console.log("Redirecionando para login")
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}