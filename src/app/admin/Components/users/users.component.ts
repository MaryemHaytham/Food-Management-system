import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/helper.service';
import { UsersService } from '../../Services/users.service';
import { Users } from '../../models/users';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  searchKey:string='';
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent |any;
  tableData :any[]= [];
  tableResponse : any
  constructor(private dialog:MatDialog,private _usersService:UsersService,private _ToastrService:ToastrService){
    
  }

  ngOnInit(): void{
    
    this.getAllUsers();

  }
  searchByName(){}

  getAllUsers(){
    this._usersService.getUsers(this.pageSize,this.pageIndex,this.searchKey).subscribe({
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
    this.getAllUsers;
  }
  openDeleteUserDialog(userData:any){
    console.log(userData)
    const dialogRef = this.dialog.open(DeleteComponent, {
      data:userData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.deleteUser(result);
        
      }
    });
  }
  openUserDetailes(item:any){
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        
        
      }
    });

  }


  deleteUser(userId:any){
    this._usersService.onDeleteUser(userId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getAllUsers();
          this._ToastrService.info('Deleted Successfuly')
      },
    })
  }



}

