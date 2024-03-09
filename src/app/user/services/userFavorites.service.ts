import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFavoritesService {

  constructor( private _HttpClient:HttpClient) { }


  getAllFavorites(data:any):Observable<any>{
    return this._HttpClient.get('userRecipe',{params :data})
  }
  addToFavorites(data:any):Observable<any>{
    return this._HttpClient.post('userRecipe',{params :data})
  }
  deleteFavorite(id:number):Observable<any>{
    return this._HttpClient.get(`userRecipe/${id}`)
  }

}
