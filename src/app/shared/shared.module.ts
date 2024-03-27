import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { DeleteComponent } from './delete/delete.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeleteComponent
  ],
  imports: [
    MatCardModule,NgxDropzoneModule,MatSelectModule,FormsModule,MatTableModule,MatPaginatorModule,MatButtonModule,MatMenuModule,MatIconModule,CommonModule,ReactiveFormsModule,HttpClientModule,ToastrModule.forRoot(),MatDialogModule,RouterModule
  ],
  exports:[MatCardModule,NgxDropzoneModule,MatSelectModule,DeleteComponent,FormsModule,MatTableModule, MatPaginatorModule,MatButtonModule,MatMenuModule,MatIconModule,NavbarComponent,SidebarComponent,ReactiveFormsModule, HttpClientModule,MatDialogModule,ReactiveFormsModule,RouterModule]
})
export class SharedModule { }
