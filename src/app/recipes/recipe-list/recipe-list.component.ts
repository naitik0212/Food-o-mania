import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('Salad', 'Mexican Mix', 'https://www.mreiwit.nl/files/weblog_view/6186/groenten.jpeg'),
    new Recipe('Salad', 'Mexican Mix', 'https://www.mreiwit.nl/files/weblog_view/6186/groenten.jpeg')];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
