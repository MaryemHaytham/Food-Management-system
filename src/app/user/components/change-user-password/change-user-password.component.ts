import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.scss']
})
export class ChangeUserPasswordComponent {

  isLoading:boolean=false;
  hide:boolean=true;
  confirmHide:boolean=true;
  confirmNewHide:boolean=true;
  userpassword = new FormGroup({
    oldPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmNewPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')])

  })

  constructor(private _router:Router,private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService){}

  onSubmit(data:FormGroup){
    this.isLoading= true;
    console.log(data.value);
    this._AuthServiceService.onUserChangePassword(data.value).subscribe({
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
        this._ToastrService.success('Password Updated successfuly','Success')
        this._AuthServiceService.logout();
        
      }
    })
  }

}
