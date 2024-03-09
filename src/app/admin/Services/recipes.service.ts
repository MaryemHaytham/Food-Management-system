import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private _HttpClient:HttpClient) { }


  getAllRecipes(data:any):Observable<any>{
    return this._HttpClient.get('Recipe',{params :data})
  }

  onAddRecipe(data:any):Observable<any>{
    return this._HttpClient.post('Recipe',data)


  }
  onDeleteRecipe(id:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${id}`,)
  
  }

  getRecipeById(id:number) :Observable<any>{
    return this._HttpClient.get(`Recipe/${id}`)

  }



}
