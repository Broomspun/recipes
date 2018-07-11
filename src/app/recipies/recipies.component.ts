import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/recipe';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
