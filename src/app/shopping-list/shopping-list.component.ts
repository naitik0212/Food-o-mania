import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[]= [new Ingredient('Apples', 5), new Ingredient('Oranges', 5)];
  private subscription: Subscription;
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   // this.shoppingList.getIngredients();
  // }
}
