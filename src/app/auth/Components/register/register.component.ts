
import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { VerifyAccountComponent } from '../verify-account/verify-account.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  imgSrc:any;

  hide:boolean = true;
  isLoading:boolean=false;
  confirmHide:boolean = true;



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
      ]),
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

  constructor(private _Router:Router,public dialog: MatDialog,private _AuthServiceService:AuthServiceService, private _ToastrService:ToastrService){}
  
  onSubmit(data:FormGroup){
    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('country', data.value.country);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('profileImage', this.imgSrc);



    this.isLoading= true;
    console.log(data);
    this._AuthServiceService.onRegister(myData).subscribe({
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
        this.openDialog();
      }
    })
  }

  files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.imgSrc=event.addFiles[0];
  this.files.splice(this.files.indexOf(event), 1);
}

openDialog(){
  const dialogRef = this.dialog.open(VerifyAccountComponent, {
    data: {name:''},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    if(result){
      this.onVerifyAccount(result);
    }
    
  });
}
onVerifyAccount(data:any){
  this._AuthServiceService.onVerify(data).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:()=>{

    },
    complete:()=>{
      this._ToastrService.success('Account Active Successfully','Success')
      this._Router.navigate(['/auth/login'])
    }
  })

}

}
