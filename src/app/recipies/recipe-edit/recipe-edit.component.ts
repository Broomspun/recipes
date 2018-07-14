import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private  recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (parms: Params) => {
          this.id = +parms['id'];
          this.editMode = parms['id'] != null;
          this.initForm();
          console.log(this.editMode);
        }
      );
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams
      .subscribe( (parms: Params) => {
        console.log(`queryParms = ${parms['allowedit']}`);
      });
    console.log(this.route.snapshot.fragment);
    this.route.fragment
      .subscribe( (parms: string) => {
        console.log(`fragment = ${parms}`);
      });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe  = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }
}
