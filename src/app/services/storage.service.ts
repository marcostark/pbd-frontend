import { Injectable } from "@angular/core";
import { Session } from "app/dashboard/model/session.model";
import { STORAGE_KEYS } from "app/_config/storage.keys.config";

@Injectable()
export class StorageService {

    getLocalUser(): Session {
        let user = sessionStorage.getItem(STORAGE_KEYS.localUser);
        if(user == null) {
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: Session) {
        if (obj == null) {
           sessionStorage.removeItem(STORAGE_KEYS.localUser) 
        } else {
            sessionStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

}