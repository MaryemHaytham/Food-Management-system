import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  isLoading:boolean=false;
  imagePath:any;
  userData:any





  constructor(private _ToastrService:ToastrService,private _AuthServiceService:AuthServiceService){}


  ngOnInit(): void {
    
      
  }
  profileForm = new FormGroup({
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
  })
  onSubmit(data:FormGroup){
    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('country', data.value.country);
    myData.append('imagePath', this.imagePath);




    this.isLoading= true;
    console.log();
    this._AuthServiceService.onEditProfile(data).subscribe({
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
        this._ToastrService.success('You successfully Updated Your Information','Success')
        
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
  this.imagePath=event.addFiles[0];
  this.files.splice(this.files.indexOf(event), 1);
}


// getRecipeById(id:number){
//   this._AuthServiceService.onChangePassword(id).subscribe({
//     next:(res)=>{
//       console.log(res)
//       this.userData=res
//     },
//     error:()=>{
      
//     },
//     complete:()=>{
//       let arr :any[]=[...this.userData.category]
//       let ids = arr.map(x => x.id);
//       //this.recipeForm.patchValue(this.recipeDate)
//       this.profileForm.patchValue({
//         userName:this.userData.userName,
//         country:this.userData.country ,
//         email:this.userData.email,
//         phoneNumber: this.userData.phoneNumber,
        

//       })
//       this._ToastrService.success('Updated Successfuly');
//     }

//   })
// }




}
