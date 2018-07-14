import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingListService} from '../shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          console.log(`you selected item ${index}`);
         }
      );
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
