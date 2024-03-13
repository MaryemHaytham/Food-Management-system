import { FavoriteModule } from './components/favorite/favorite.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'recipes', loadChildren:()=> import('../user/components/recipes/recipes.module').then(m => m.RecipesModule)},
  {path:'favorites', loadChildren:()=> import('../user/components/favorite/favorite.module').then(m => m.FavoriteModule)},
  {path: 'changeuserpassword', component: ChangeUserPasswordComponent},
  {path: 'profile', component: ProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
