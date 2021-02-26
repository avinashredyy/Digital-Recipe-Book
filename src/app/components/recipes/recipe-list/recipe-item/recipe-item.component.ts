import { Recipe } from './../../../../models/recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeData;
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(){
    this.selectedRecipe.emit()
  }

}
