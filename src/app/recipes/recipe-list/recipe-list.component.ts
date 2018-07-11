import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy Description', 'https://images-na.ssl-images-amazon.com/images/I/51oBX5UFXNL._SY450_.jpg');
  constructor() { }

  ngOnInit() {
  }

}
