import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipiesComponent} from './recipies/recipies.component';
import {RecipeDetailComponent} from './recipies/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipies/recipe-start/rercipe-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      { path: ':id', component: RecipeDetailComponent },
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
