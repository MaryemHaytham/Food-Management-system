import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../Guards/admin.guard';
import { userGuard } from '../Guards/user.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin',canActivate:[adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'user',canActivate:[userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
