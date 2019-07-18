import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from 'app/services/storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _storage: StorageService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(request).pipe(catchError(err => {
        //     if (err.status === 401) {
        //         // auto logout if 401 response returned from api
        //         // this.authenticationService.logout();
        //         location.reload(true);
        //     }            
        //     const error = err.error.message || err.statusText;
        //     return throwError(error);
        // } 
        return next.handle(request).pipe(catchError(err => {            
                // const error = err.error.message || err.statusText;
                let errorObj = err;
                if(errorObj.error){
                    errorObj = errorObj.error
                }
                // Caso não venha em formato JSON
                if(errorObj.status){
                    errorObj = JSON.parse(errorObj)
                }
                console.log("Erro interceptado: ")
                console.log(errorObj)

                switch(errorObj.status){
                    case 403:
                        this.handle403();
                        break
                }

                return throwError(errorObj);
            }   
        ))
    }
    handle403(){
        // Fazer logout
        this._storage.setLocalUser(null);
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
