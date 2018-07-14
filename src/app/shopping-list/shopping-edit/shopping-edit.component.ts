import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);

          this.slForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          })
          console.log(`you selected item ${index}`);
         }
      );
  }

  onAddItem(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
  }
  // onAddItem(formValues) {
  //   const newIngredient = new Ingredient(formValues.name, formValues.amount);
  //   this.slService.addIngredient(newIngredient);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
