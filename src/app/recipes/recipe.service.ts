import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe('Salad', 'Mexican Mix', 'https://www.mreiwit.nl/files/weblog_view/6186/groenten.jpeg',
    [new Ingredient('Cabbage', 2),
      new Ingredient('Olives', 5),
      new Ingredient('Jalepenos', 10)
    ]), new Recipe('Salad', 'Italian Mix',
    'https://food.fnr.sndimg.com/content/dam/images/food/video/0/02/021/0219/0219826.jpg.rend.hgtvcom.616.462.suffix/1478840487885.jpeg',
      [new Ingredient('Brocolli', 2),
      new Ingredient('Cheddar Cheese', 5),
      new Ingredient('Jalepenos', 10)
    ])];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // returns new array ehich is an exact copy of the one in this service
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientstolist(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

}
