import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/Category.service';
import { ICategory, table } from '../../models/category';
import { PageEvent } from '@angular/material/paginator';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  searchKey:string='';
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent |any;
  tableData :ICategory[]= [];
  tableResponse : any
  constructor(private dialog:MatDialog,private _CategoryService:CategoryService,private _ToastrService:ToastrService){
    
  }

  ngOnInit(): void{
    
    this.getCategories();

  }
  searchByName(){}

  getCategories(){
    this._CategoryService.getAllCategories(this.pageSize,this.pageIndex,this.searchKey).subscribe({
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
    this.getCategories();
  }

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.addCategory(result);
      }

      
    });
  }

  openEditCategoryDialog(categoryData:any):void{
    console.log(categoryData)
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data:categoryData.name
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.editCategory(result, categoryData.id);
      }
    });
  }
  openDeleteCategoryDialog(categoryData:any){
    console.log(categoryData)
    const dialogRef = this.dialog.open(DeleteComponent, {
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

  addCategory(categoryName:string){
    this._CategoryService.onAddCategory(categoryName).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {

          this._ToastrService.success('Added Successfuly')
          this.getCategories();
      },
    })
  }

  editCategory(name:string,id:string){
    this._CategoryService.onEditCategory(name,id).subscribe({
      next:(res) => {
        console.log(res);
      },error:(err:any)=>{
        console.log(err)

      },complete:()=> {
          this.getCategories();
          this._ToastrService.success('Updated Successfuly')
      },
    })
  }

  deleteCategory(categoryId:any){
    this._CategoryService.onDeleteCategory(categoryId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getCategories();
          this._ToastrService.info('Deleted Successfuly')
      },
    })
  }



}



