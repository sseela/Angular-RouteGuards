import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname: string) {
    localStorage.setItem('token', uname);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }


}
