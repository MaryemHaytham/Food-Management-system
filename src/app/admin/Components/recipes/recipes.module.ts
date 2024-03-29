import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './Components/add-edit-recipe/add-edit-recipe.component';
import { DeleteRecipeComponent } from './Components/delete-recipe/delete-recipe.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent,
    DeleteRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
