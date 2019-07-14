import { Injectable } from '@angular/core';
import { Session } from 'app/dashboard/model/session.model';

@Injectable()
export class SessionService {
  static SESSION_STORE_KEY = 'session';

  private session: Session;

  constructor() { }

  setSession(session: Session) {
    this.session = session;
  }

  storeLocal() {
    localStorage.setItem(SessionService.SESSION_STORE_KEY, JSON.stringify(this.session));
  }

  loadLocal() {
    this.session = JSON.parse(localStorage.getItem(SessionService.SESSION_STORE_KEY));
  }

  storeSession() {
    sessionStorage.setItem(SessionService.SESSION_STORE_KEY, JSON.stringify(this.session));
  }

  loadSession() {
    this.session = JSON.parse(sessionStorage.getItem(SessionService.SESSION_STORE_KEY));
  }

  load() {
    this.loadLocal();
    this.loadSession();
  }

  store() {
    this.storeLocal();
    this.storeSession();
  }

  isLoged(): boolean {
    return this.session != null || this.session != undefined;
  }

  clear() {
    this.session = null;
    this.store();
    localStorage.clear();
    sessionStorage.clear();
  }

  getSession(): Session {
    if (this.isLoged()) {
      return JSON.parse(localStorage.getItem(SessionService.SESSION_STORE_KEY));
    } else {
      return null;
    }
  }
}