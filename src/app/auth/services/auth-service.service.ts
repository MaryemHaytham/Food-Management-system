import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from 'src/app/models/iregister';
import { ILogin } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient:HttpClient) { }

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
