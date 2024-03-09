import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';

const routes: Routes = [{ path: '', component: RecipesComponent },
{path:'viewRecipe',component:ViewRecipeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
