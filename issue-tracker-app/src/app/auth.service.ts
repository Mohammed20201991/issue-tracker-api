import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  // isLoggedIn = true;
  redirectUrl: null | string = null;
  // static data for username
  user ={
          username: 'Mohammed Alhitawi'
        };
  constructor(
    private http:HttpClient
  ) { }

  async login(username: string, password: string) {
  this.isLoggedIn = true;
  // this.http.get('sanctum/csrf-cookie')
  // this.http.post('/login',{
  //   email : username,
  //   password,
  // })
  }

  logout(){
    this.isLoggedIn = false;
  }
}
