import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRecipeService {

  constructor( private _HttpClient:HttpClient) { }


  getAllRecipes(data:any):Observable<any>{
    return this._HttpClient.get('Recipe',{params :data})
  }
  onEditUser(id:number,data:any):Observable<any>{
    return this._HttpClient.put(`Users`,data,{params:{id}})
  
  }
  getCurrentUser() :Observable<any>{
    return this._HttpClient.get("Users/currentUser")

  }


}
