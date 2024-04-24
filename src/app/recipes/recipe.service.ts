import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }
  
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Slurp some noodles with olive oil and broccoli',
      'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Basil', 1),
        new Ingredient('Olive Oil', 1),
        new Ingredient('Broccoli', 1)
      ]
    ),
    new Recipe(
      'Pasta',
      'Delicious Pasta',
      'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Cheese', 2)
      ]
    ),
  ];

  // here we use .slice to get a copy of the array rather than a direct reference
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
