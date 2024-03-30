import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../../Services/Category.service';
import { RecipesService } from '../../Services/recipes.service';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/helper.service';
import { ICategory } from '../../models/category';
import { DeleteRecipeComponent } from './Components/delete-recipe/delete-recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  tagId:number=0
  categoryId:number=0
  imagePath: string= 'https://upskilling-egypt.com:3006/';
  dummyImage:string='../../../../assets/images/recipes.jpg'
  searchKey:string='';
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent |any;
  tableData :any[]= [];
  tags:any[]=[];
  categories:ICategory[]=[]
  tableResponse : any

  constructor(private _CategoryService:CategoryService,private _HelperService:HelperService,private dialog:MatDialog,private _RecipesService:RecipesService,private _ToastrService:ToastrService){
    
  }

  ngOnInit(): void{
    this.getRecipes();
    this.getAllTags();
    this.getAllcategories();
    
    

  }
  searchByName(){}

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




  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getRecipes();
  }

  openDeleteCategoryDialog(categoryData:any){
    console.log(categoryData)
    const dialogRef = this.dialog.open(DeleteRecipeComponent, {
      data:categoryData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.deleteCategory(result);
        
      }
    });
  }

  

  deleteCategory(categoryId:any){
    this._RecipesService.onDeleteRecipe(categoryId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getRecipes();
          this._ToastrService.info('Deleted Successfuly')
      },
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

test(x:string){
  console.log(x)
}
}
