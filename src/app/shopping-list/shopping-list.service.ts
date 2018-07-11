import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); // Copy
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  constructor() { }
}
