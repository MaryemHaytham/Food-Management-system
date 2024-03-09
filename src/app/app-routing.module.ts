import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard',canActivate:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'recipes', loadChildren: () => import('./admin/Components/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'users', loadChildren: () => import('./admin/Components/users/users.module').then(m => m.UsersModule) },
  { path: 'recipes', loadChildren: () => import('./user/components/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'favorite', loadChildren: () => import('./user/components/favorite/favorite.module').then(m => m.FavoriteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
