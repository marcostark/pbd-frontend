import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../login/authentication.service';
import { Session } from 'app/dashboard/model/session.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private session: Session;
    SESSION_STORE_KEY = 'session';

    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.token) {
        //     request = request.clone({
        //         setHeaders: { 
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }

        // return next.handle(request);
        // add authorization header with jwt token if available
        if (sessionStorage.getItem(this.SESSION_STORE_KEY)) {
            this.session = JSON.parse(sessionStorage.getItem(this.SESSION_STORE_KEY));
            if(this.session != null) {
                if(this.session.key || this.session.key !== undefined || this.session.key != null) {
                    
                    const newRequest = request.clone({
                        headers: request.headers.set( 
                            'Authorization', `Token ${this.session.key}`
                        )
                    });
                    return next.handle(newRequest)
                } else {
                    console.log("Else");

                    return next.handle(request);
                }
            }            
        }

        return next.handle(request);
    }
}