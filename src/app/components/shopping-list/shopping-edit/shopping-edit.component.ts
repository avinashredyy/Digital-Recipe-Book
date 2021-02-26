import { Ingredient } from './../../../models/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientToAdd = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  onAdd(event){
    const inpName = this.nameInputRef.nativeElement.value;
    const inpAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inpName, inpAmount)
    this.ingredientToAdd.emit(newIngredient)
  }

}
