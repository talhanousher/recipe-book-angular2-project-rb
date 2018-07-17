import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'recipe1 desciption', 'https://i.ndtvimg.com/i/2016-07/tofu-rice-625_625x350_71467969111.jpg', []),
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe2', 'recipe2 description', 'http://leeksandhighheels.com/wordpress/wp-content/uploads/2017/12/8-side-dishes-to-inspire-you-1.jpg', [])
  ];
  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}
