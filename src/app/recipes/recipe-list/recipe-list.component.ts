import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'recipe1 desciption', 'https://i.ndtvimg.com/i/2016-07/tofu-rice-625_625x350_71467969111.jpg', []),
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe2', 'recipe2 description', 'http://leeksandhighheels.com/wordpress/wp-content/uploads/2017/12/8-side-dishes-to-inspire-you-1.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Recipe1', 'recipe1 desciption', 'https://i.ndtvimg.com/i/2016-07/tofu-rice-625_625x350_71467969111.jpg');
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
