import { FavoriteModule } from './components/favorite/favorite.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'recipes', loadChildren:()=> import('../user/components/recipes/recipes.module').then(m => m.RecipesModule)},
  {path:'favorites', loadChildren:()=> import('../user/components/favorite/favorite.module').then(m => m.FavoriteModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
