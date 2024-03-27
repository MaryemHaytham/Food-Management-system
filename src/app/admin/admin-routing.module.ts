import { CategoriesComponent } from './Components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    {path:'recipes', loadChildren:()=> import('../admin//Components/recipes/recipes.module').then(m => m.RecipesModule)},
    {path:'users', loadChildren:()=> import('../admin/Components/users/users.module').then(m => m.UsersModule)},
    {path:'category',component:CategoriesComponent}
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
