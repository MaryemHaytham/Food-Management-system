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
  onRegister(data: IRegister){
    return this._HttpClient.post('Users/Register', data)
  }

}
