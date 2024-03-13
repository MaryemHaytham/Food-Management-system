import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFavoritesService {

  constructor( private _HttpClient:HttpClient) { }


  getAllFavorites():Observable<any>{
    return this._HttpClient.get('userRecipe')
  }
  onAddToFavorites(id:number):Observable<any>{
    return this._HttpClient.post('userRecipe',{recipeId:id})
  }
  deleteFavorite(id:number):Observable<any>{
    return this._HttpClient.delete(`userRecipe/${id}`)
  }

}
