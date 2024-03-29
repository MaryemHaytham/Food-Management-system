import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    UserComponent,
    ChangeUserPasswordComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
