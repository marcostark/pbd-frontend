import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisModel } from 'app/dashboard/model/credenciais.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(
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

    

    
   
}
