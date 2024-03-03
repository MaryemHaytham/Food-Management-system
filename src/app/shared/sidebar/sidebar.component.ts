import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';


interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _AuthServiceService:AuthServiceService){}


  isAdmin():boolean{
    console.log(this._AuthServiceService.role)
   return this._AuthServiceService.role == 'SuperAdmin' ? true:false;
  }
  isUser():boolean{
    console.log(this._AuthServiceService.role)
    return this._AuthServiceService.role == 'SystemUser' ? true:false;
   }

  Menu : Menu [] =[
    {
    text:'Home',
    link:'/dashboard/home',
    icon:"fa-solid fa-house",
    isActive:this.isAdmin() || this.isUser()
  },
  {
    text:'Users',
    link:'home1',
    icon:"fa-solid fa-house",
    isActive:this.isAdmin()
  },
  {
    text:'Recipes',
    link:'home2',
    icon:"fa-solid fa-house",
    isActive:this.isUser()
  },
  {
    text:'Favorites',
    link:'home3',
    icon:"fa-solid fa-house",
    isActive:this.isUser()
  },
  {
    text:'Recipes',
    link:'home4',
    icon:"fa-solid fa-house",
    isActive:this.isAdmin()
  },
  {
    text:"Category",
    link:'home5',
    icon:"fa-solid fa-house",
    isActive:this.isAdmin()
  }
]
   

}
