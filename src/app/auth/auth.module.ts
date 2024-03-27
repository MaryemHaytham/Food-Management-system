import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyAccountComponent } from './Components/verify-account/verify-account.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyAccountComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxDropzoneModule,
    ToastrModule.forRoot()
  ]
})
export class AuthModule { }
