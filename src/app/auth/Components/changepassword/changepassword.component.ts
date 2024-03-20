import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  hide:boolean = true;
  confirmHide:boolean = true;
  

  changePasswordForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null ,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl(''),
    seed:new FormControl(null)
  }, {validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if(confirmPassword?.value == ''){
      confirmPassword?.setErrors({ required:true})
    }

    else if(password?.value != confirmPassword?.value){
      confirmPassword?.setErrors({ missmatch:true})

    }

  }
  
  constructor(private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService,private _Router:Router){}

  onSubmit(data:FormGroup){
    
    
    console.log(data);
    this._AuthServiceService.onChangePassword(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err:any)=>{
      },
      complete:()=>{
        
        this._ToastrService.success('Your Password Changed Successfully','Success')
        this._Router.navigate(['/auth/login'])


      }
    })
  }

}


