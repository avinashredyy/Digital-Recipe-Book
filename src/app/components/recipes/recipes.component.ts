import { Recipe } from './../../models/recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe:Recipe){
    this.currentRecipe = recipe
  }

}
