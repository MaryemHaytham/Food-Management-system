import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/Services/Category.service';
import { ICategory } from 'src/app/admin/models/category';
import { HelperService } from 'src/app/shared/helper.service';
import { UserFavoritesService } from '../../services/userFavorites.service';
import { UserRecipeService } from '../../services/userRecipe.service';
import { MatCardModule } from '@angular/material/card';
import { RecipesService } from 'src/app/admin/Services/recipes.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent {
  tagId:number=0
  categoryId:number=0
  imagePath: string= 'https://upskilling-egypt.com/';
  dummyImage:string='../../../../assets/images/recipes.jpg'
  searchKey:string='';
  pageEvent: PageEvent |any;
  tableData :any[]= [];
  tags:any[]=[];
  categories:ICategory[]=[]
  tableResponse : any
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];

  constructor(private _MatCardModule:MatCardModule,private dialog:MatDialog,private _RecipesService:RecipesService,private _UserRecipeService:UserRecipeService,private _ToastrService:ToastrService,private _HelperService:HelperService,private _CategoryService:CategoryService){
    
  }

  ngOnInit(): void{
    this.getRecipes();
  
    
    
    

  }
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getRecipes();
  }
  

  getRecipes(){
    let paramsApi = {
      pageSize:this.pageSize,
      pageNumber:this.pageIndex,
      name:this.searchKey,
      tagId :this.tagId>0?this.tagId:0,
      categoryId:this.categoryId
      

    }
    this._RecipesService.getAllRecipes(paramsApi).subscribe({
      next:(res)=>{
        console.log(res.pageSize);
        this.tableResponse = res;
        this.tableData=res.data;
      }
    })
  }

  getRecipeById(id:number){
    this._RecipesService.getRecipeById(id).subscribe({
      next:(res)=>{
        console.log(res)
        
      },
      error:()=>{
        
      },
      complete:()=>{
        
        
      }

    })
  }

}
