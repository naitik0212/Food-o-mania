import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe('Salad', 'Mexican Mix', 'https://www.mreiwit.nl/files/weblog_view/6186/groenten.jpeg'),
    new Recipe('Salad', 'Mexican Mix', 'https://www.mreiwit.nl/files/weblog_view/6186/groenten.jpeg')];

  getRecipes() {
    return this.recipes.slice(); // returns new array ehich is an exact copy of the one in this service
  }

}
