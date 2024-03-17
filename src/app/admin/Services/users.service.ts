import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private _HttpClient:HttpClient) { }


  

  getUsers(size:number,Number:number,search:string): Observable<any> {
    return this._HttpClient.get('Users',{params:{
      pageSize:size,pageNumber:Number,name:search
    }});
  }

  onDeleteUser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`,)
  
  }
  onGetUser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`,)
  
  }

}
