import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';
import { UserRecipeService } from '../../services/userRecipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userId :number=0
  imgUrl:any='https:upskilling-egypt.com/'
  imagePath:any;
  userData:any
  imgSrc:any;
  files: File[] = [];
  hide:boolean = true;
  confirmHide:boolean = true;





  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _ToastrService:ToastrService,private _AuthServiceService:AuthServiceService,private _UserRecipeService:UserRecipeService){
    
  }


  ngOnInit(): void {
    
   
      this.getUserById();
    
    
      
  }
  profileForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(3), 
      Validators.maxLength(20),
      Validators.pattern('^(?=.*?[a-z])(?=.*?[a-z])(?=.*?[0-9]).{3,20}$')
    ]),
    imagePath: new FormControl(null,[]),
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
    confirmPassword:new FormControl(null,[
      Validators.required, 
      ])
  })
  onSubmit(data:FormGroup){
    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('country', data.value.country);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('imagePath', this.imgSrc,this.imgSrc.name);
    this._UserRecipeService.onEditUser(this.userId, myData).subscribe({
      next :(res) =>{
        console.log(res)
      },
      error:()=>{

      },
      complete:()=>{
        this._ToastrService.success('Edited Successfuly');
        this._router.navigate(['/dashboard/home']);

      }
    })

  }



  onSelect(event:any) {
    console.log(event);
    debugger
    this.imgSrc=event.addedFiles[0];
    this.profileForm.get('imagePath')?.setValue(this.imgSrc);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  getUserById(){
    this._UserRecipeService.getCurrentUser().subscribe({
      next:(res)=>{

        debugger
        this.userId = res.id;
        this.userData=res

      },
      error:()=>{
        
      },
      complete:()=>{
        this.imgSrc = this.imgUrl+this.userData.imagePath
        this.profileForm.patchValue({
          userName:this.userData.userName,
          country:this.userData.country ,
          phoneNumber:this.userData.phoneNumber,
          email: this.userData.email,
          confirmPassword: this.userData.confirmPassword,
          imagePath:this.userData.imagePath ,
          

        })
        
      }
    
    })
  }




}
