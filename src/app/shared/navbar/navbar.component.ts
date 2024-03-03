import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userName=localStorage.getItem('userName');

  constructor(private _AuthServiceService:AuthServiceService){}

  myLogout(){
    this._AuthServiceService.logout();
  }

}
