import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();


  private ingredients: Ingredient[]= [new Ingredient('Apples', 5), new Ingredient('Oranges', 5)];

  getIngredients() {
    // return this.ingredients;
    return this.ingredients.slice();

  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this.ingredients.push(ingredient);
  }

  addIngredientstolist(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    // Spread operator
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
