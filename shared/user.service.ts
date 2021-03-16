import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginuser, User } from './user.model';
import{environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUser: User={
    name:' ',
    email:' ',
    password:' ',
    contact:' '
  }

  existinguser:loginuser={
    email:' ',
    password:' '
  }

  loginauth=false;
  constructor(private http:HttpClient) { }

  addNewUser(user:User)
  {
    return this.http.post(environment.apiBaseUrl + 'newUser',user);
  }

  loginuser(verifyUser:loginuser)
  {
    return this.http.post(environment.apiBaseUrl+'auth',verifyUser);
  }

  getselectedUser(id:string)
  {
   return this.http.get(environment.apiBaseUrl+'selecteduser/'+id);
  }

  //store token
  setToken(token:string)
  {
    localStorage.setItem('token',token);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  removeToken()
  {
    localStorage.removeItem('token');
  }
  //token verification

  getPayload()
  {
    var token=JSON.stringify(this.getToken());
    var userPayload=atob(token.split('.')[1]);
    if(userPayload)
    {
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn()
  {
    var userpayload=this.getPayload();
    if(userpayload)
    {
      return userpayload.exp>Date.now()/1000;
    }
    else{
      return null;
    }
  }
  removeUser(){
    localStorage.removeItem('user');
  }
  isauthen(){
    return localStorage.getItem('user')!=null;
   }
   onlogin()
  {
    this.loginauth=true;
  }
}

