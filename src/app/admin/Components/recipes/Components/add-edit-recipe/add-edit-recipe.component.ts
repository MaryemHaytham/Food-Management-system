import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/Services/Category.service';
import { RecipesService } from 'src/app/admin/Services/recipes.service';
import { ICategory } from 'src/app/admin/models/category';
import { HelperService } from 'src/app/shared/helper.service';


@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent implements OnInit{

  tags:any[]=[];
  categories:ICategory[]=[]
  recipeId :number=0
  imgUrl:any='https:upskilling-egypt.com/'

  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _CategoryService:CategoryService,private _HelperService:HelperService,private dialog:MatDialog,private _RecipesService:RecipesService,private _ToastrService:ToastrService){
    console.log(this.recipeId);
    this.recipeId = _ActivatedRoute.snapshot.params['id']
    
  }
ngOnInit(): void {
    this.getAllTags();
    this.getAllcategories();
    if(this.recipeId){
      this.getRecipeById(this.recipeId);
    }
    
}
imgSrc:any;
files: File[] = [];


onSelect(event:any) {
  console.log(event);
  debugger
  this.imgSrc=event.addedFiles[0];
  this.recipeForm.get('imagePath')?.setValue(this.imgSrc);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


  recipeForm = new FormGroup({
    name: new FormControl(null,[Validators.maxLength(25)]),
    description: new FormControl(null,[Validators.maxLength(50)]),
    price: new FormControl(null,[Validators.maxLength(5)]),
    tagId: new FormControl(null),
    imagePath: new FormControl(null,[]),
    categoriesIds: new FormControl(null),
  })

  recipeDate:any;



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

  onSubmit(data:FormGroup){
    console.log(data)
    let myData = new FormData();
    myData.append('name',data.value.name);
    myData.append('description',data.value.description);
    myData.append('price',data.value.price);
    myData.append('tagId',data.value.tagId);
    myData.append('categoriesIds',data.value.categoriesIds);
    myData.append('imagePath',this.imgSrc,this.imgSrc.name);
    if(this.recipeId){
      this._RecipesService.onEditRecipe(this.recipeId, myData).subscribe({
        next :(res) =>{
          console.log(res)
        },
        error:()=>{
  
        },
        complete:()=>{
          this._ToastrService.success('Edited Successfuly');
          this._router.navigate(['/dashboard/admin/recipes']);
  
        }
      })
  
      
    }
    else{
      this._RecipesService.onAddRecipe(myData).subscribe({
        next :(res) =>{
          console.log(res)
        },
        error:()=>{
  
        },
        complete:()=>{
          this._ToastrService.success('Added Successfuly');
          this._router.navigate(['/dashboard/admin/recipes']);
  
        }
      })
    }
    

  }



  getRecipeById(id:number){
    this._RecipesService.getRecipeById(id).subscribe({
      next:(res)=>{

        console.log(res)
        this.recipeDate=res

      },
      error:()=>{
        
      },
      complete:()=>{
        let arr :any[]=[...this.recipeDate.category]
        let ids = arr.map(x => x.id);
        this.imgSrc = this.imgUrl+this.recipeDate.imagePath
        this.recipeForm.patchValue({
          name:this.recipeDate.name,
          description:this.recipeDate.description ,
          price:this.recipeDate.price,
          tagId: this.recipeDate.tag.id,
          imagePath:this.recipeDate.imagePath ,
          categoriesIds: this.recipeDate.category.map((x:any)=>x.id),

        })
        
      }

    })
  }
  


}
