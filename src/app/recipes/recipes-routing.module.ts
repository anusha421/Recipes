import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { AuthGaurd } from "../auth/auth-gaurd";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { recipeResolver } from "./recipe.resolver";

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGaurd],
        children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailsComponent,
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
          },
        ],
        resolve: [recipeResolver],
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class RecipesRoutingModule {}