import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    this.slService.addIngredient(newIngredient);
  }
  // onAddItem(formValues) {
  //   const newIngredient = new Ingredient(formValues.name, formValues.amount);
  //   this.slService.addIngredient(newIngredient);
  // }
}
