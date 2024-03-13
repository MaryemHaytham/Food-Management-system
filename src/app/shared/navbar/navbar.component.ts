import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userName=localStorage.getItem('userName');

  constructor(private _AuthServiceService:AuthServiceService){}
  isAdmin():boolean{
    console.log(this._AuthServiceService.role)
   return this._AuthServiceService.role == 'SuperAdmin' ? true:false;
  }
  isUser():boolean{
    console.log(this._AuthServiceService.role)
    return this._AuthServiceService.role == 'SystemUser' ? true:false;
   }

  myLogout(){
    this._AuthServiceService.logout();
  }

  Menu : Menu [] = [
    {
      text:'Profile',
      link:'/dashboard/user/profile',
      icon:"fa-solid fa-user",
      isActive:this.isUser()

    },
    {
      text:'ChangePassword',
      link:'/dashboard/user/changeuserpassword',
      icon:"fa-solid fa-lock",
      isActive:this.isUser()

    }
  ]

}
