import { ToastrService } from 'ngx-toastr';
import { UserRecipeService } from './../../services/userRecipe.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ICategory } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/Services/Category.service';
import { HelperService } from 'src/app/shared/helper.service';
import { UserFavoritesService } from '../../services/userFavorites.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
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

  constructor(private _UserFavoritesService:UserFavoritesService,private dialog:MatDialog,private _RecipesService:UserRecipeService,private _ToastrService:ToastrService,private _HelperService:HelperService,private _CategoryService:CategoryService){
    
  }

  ngOnInit(): void{
    this.getRecipes();
    this.getAllTags();
    this.getAllcategories();
    
    
    

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
  getAllTags(){
    this._HelperService.getTags().subscribe({
      next:(res)=>{
        console.log(res)
        this.tags = res;
      },
  
    })
  }
  getAllcategories(){
    this._CategoryService.getAllCategories(1000,1,'').subscribe({
      next:(res)=>{
        console.log(res)
        this.categories = res.data;
      },
  
    })
  }
  
  addtoFav(id:number){
    this._UserFavoritesService.onAddToFavorites(id).subscribe({
      next:(res) => {
        console.log(res);
      },error:(err:any)=>{
        console.log(err)

      },complete:()=> {
          this._ToastrService.success('Added To Favorite Successfuly') 

      },
    })
  }
  openRecipeDetailes(item:any){
    const dialogRef = this.dialog.open(RecipeDetailComponent, {
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.addtoFav(result)
        
        
      }
    });

  }
 


}
