
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide:boolean = true;
  isLoading:boolean=false;



    registerForm:FormGroup = new FormGroup ({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(3), 
      Validators.maxLength(20),
      Validators.pattern('^(?=.*?[a-z])(?=.*?[a-z])(?=.*?[0-9]).{3,20}$')
    ]),
    country: new FormControl('',[
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(20)]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email]),
    phoneNumber: new FormControl('',[
      Validators.required, 
      Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password: new FormControl('' ,[
      Validators.required,
       Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmPassword: new FormControl('')

  } , {validators:[this.confirmPassword]} as FormControlOptions);

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

  constructor(private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService){}
  
  onSubmit(data:FormGroup){
    this.isLoading= true;
    console.log(data);
    this._AuthServiceService.onRegister(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err:any)=>{
        this.isLoading= false;
        console.log(err);
        this._ToastrService.error(err.error.message,'Error')
      },
      complete:()=>{
        this.isLoading= false;
        this._ToastrService.success('You successfully Registered','Success')
      }
    })
  }



}
