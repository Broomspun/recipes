import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (parms: Params) => {
          this.id = +parms['id'];
          this.editMode = parms['id'] != null;
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
}
