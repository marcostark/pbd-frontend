import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisModel } from 'app/dashboard/model/credenciais.model';
import { Observable } from 'rxjs';
import { Session } from 'app/dashboard/model/session.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(
        public storage: StorageService,
        private http: HttpClient,
        @Inject('AUTH_ENDPOINT') private authEndpoint: string,            
        ) {

    }

    login(cred: CredenciaisModel):Observable<any> {
        return this.http.post(
            this.authEndpoint, cred,
            {
                observe: 'response',
                responseType: 'text'
            });        
    }

    // Guardando usuario na sessão
    sucessfullLogin(authorizationValue: string){
        let tok = authorizationValue.substring(7);
        let user: Session = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }

    // login(cred: CredenciaisModel): Promise<void> {

    //     const headers = new HttpHeaders();
    //     headers.append('Authorization','Basic SXJvbk1hblRva2Vu');
    //     headers.append('Content-Type','application/json');
    //     const body = cred;

    //     return this.http.post(this.authEndpoint, body, { headers })
    //     .toPromise()
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(response => {
    //         console.log(response);
    //     });
             
    // }

    

    
   
}
