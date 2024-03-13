import { Component, OnInit } from '@angular/core';
import { UserFavoritesService } from '../../services/userFavorites.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{
  imagePath: string= 'https://upskilling-egypt.com/';
  dummyImage:string='../../../../assets/images/recipes.jpg'
  tableData:any;
  tableRecipe:any[]=[];
  constructor(private _UserFavoritesService:UserFavoritesService,private _ToastrService:ToastrService){}

  ngOnInit(): void {
    this.getMyFavs();
      
  }
  getMyFavs(){
    this._UserFavoritesService.getAllFavorites().subscribe({
      next:(res)=>{
        console.log(res)
        this.tableRecipe = res.data
      },error:(err)=> {
          
      },
      complete:() =>{
          
      },
    })

  }
  removeItem(id:number){
    this._UserFavoritesService.deleteFavorite(id).subscribe({
      next:(res)=>{
        console.log(res)
        
      },error:(err)=> {
          
      },
      complete:() =>{
        this._ToastrService.success('Deleted Successfuly')
        this.getMyFavs();
      },

    })


  }


}
