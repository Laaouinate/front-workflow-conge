import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data:any) {
    localStorage.setItem('token', data);
  }

  handle(data) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  payload(token){
      const payload = token.split('.')[1];
      return this.decode(payload);
  }

  isValid() {
    const token =this.getToken();

    if(token) {
      const payload = this.payload(token);
      if(payload) {
        return true;
      }
    }
    return false;
  }

  getInfos() {
    const token = this.getToken();

    if(token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null
  }

  loggedIn() {
    return this.isValid();
  }

}
