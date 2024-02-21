import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,HttpClientModule,ToastrModule.forRoot(),MatDialogModule
  ],
  exports:[ReactiveFormsModule, HttpClientModule,MatDialogModule]
})
export class SharedModule { }
