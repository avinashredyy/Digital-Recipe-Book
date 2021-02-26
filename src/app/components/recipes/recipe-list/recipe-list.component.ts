import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../../../models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() singleRecipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'First Recipe', 'https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg'),
    new Recipe('Another test', 'Second test recipe', 'https://www.choicehotels.com/cms/images/choice-hotels/demand-articles/img_best-pizza-places-in-chicago_header/img_best-pizza-places-in-chicago_header.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe:Recipe){
    this.singleRecipe.emit(recipe)
  }

}
