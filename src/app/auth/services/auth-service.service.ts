import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { IRegister } from 'src/app/models/iregister';
import { ILogin } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //token = localStorage.getItem('userToken')
  role : string | any = '';

  constructor(private _HttpClient:HttpClient) {
    
    if(localStorage.getItem('userToken')!==null){
      this.getProfile();
    }
   }
   
  getProfile(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded:any=jwtDecode(encoded);
    localStorage.setItem('userRole',decoded.userGroup);
    localStorage.setItem('userName',decoded.userName)
    console.log(decoded)
    this.getRole();
  }
  getRole(){
    if(localStorage.getItem('userToken')!==null && localStorage.getItem('userRoke')!==null){
      this.role = localStorage.getItem('userRole')
    }
  }

  onLogin(data: ILogin){
    return this._HttpClient.post('Users/Login', data)
  }
  onRegister(data: any){
    return this._HttpClient.post('Users/Register', data)
  }
  onVerify(data: any){
    return this._HttpClient.put('Users/verify', data)
  }
  onForgotPassword(data: any){
    return this._HttpClient.post('Users/Reset/Request', data)
  }
  onChangePassword(data: any){
    return this._HttpClient.post('Users/Reset', data)
  }


}
