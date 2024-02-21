import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  isLoading:boolean=false;

  forgotPasswordForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
  })

  

  constructor(private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService,private _Router:Router){
  }

  onSubmit(data:FormGroup){
    
    console.log(data);
    this._AuthServiceService.onForgotPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err:any)=>{
      },
      complete:()=>{
        
        this._ToastrService.success('Email Reset Successfully','Success')
        this._Router.navigate(['/auth/changepassword'])

      }
    })
  }


}
