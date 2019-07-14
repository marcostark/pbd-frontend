import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsuarioService } from 'app/usuario/usuario.service';
import { Session } from 'app/dashboard/model/session.model';
import { SessionService } from './session.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UsuarioModel>;
    public currentUser: Observable<UsuarioModel>;

    oauthToken = 'https://simulado-django.herokuapp.com/rest-auth/login/';

    constructor(
        private http: HttpClient,
        private userService: UsuarioService,
        private sessionService: SessionService,
        ) {

    }

    login(username: string, password: string): Observable<Session> {
        
        return Observable.create(observer => {
            
            this.http.post<LoginResponse>(this.oauthToken, { username, password }).subscribe(
             loginResponse => {
                 this.userService.getSessionUser(username, loginResponse.key).subscribe(
                     usuario => {
                        const session = new Session();
                        session.key = loginResponse.key;
                        session.user = usuario;

                        observer.next(session);
                     },
                     error => observer.error(error)                     
                 );             
                },
                error => {
                    observer.error(error)   
                }
            );
            return () => {};
        });
    }

    
    logout() {
        // localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);        
        this.sessionService.setSession(null);
        this.sessionService.store();
    }
}

interface LoginResponse {
    key: string;
}