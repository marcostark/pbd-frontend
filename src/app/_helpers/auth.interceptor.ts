import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from 'app/services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private storage: StorageService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storage.getLocalUser();

        if (localUser){
            // Clonando a requisição e adicionando o token ao cabeçalho
            const authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq); 
        } else {
            return next.handle(request); 
        }
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
