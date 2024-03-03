import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
  })

  hide:boolean = true;
  isLoading:boolean=false;

  constructor(private _router:Router,private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService){}


  ngOnInit() {
    
  }

  onSubmit(data:FormGroup){
    this.isLoading= true;
    console.log(data.value);
    this._AuthServiceService.onLogin(data.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        
        localStorage.setItem('userToken', res.token)
        this._AuthServiceService.getProfile();
      },
      error:(err:any)=>{
        this.isLoading= false;
        console.log(err);
        this._ToastrService.error(err.error.message,'Error')
      },
      complete:()=>{
        this.isLoading= false;
        this._ToastrService.success('You successfully Loggedin','Success')
        this._router.navigate(['/dashboard'])
      }
    })
  }

  
}
