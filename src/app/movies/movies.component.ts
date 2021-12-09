import { Component, OnInit } from '@angular/core';
import {Category} from "./interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  selectedCategoryId = -1;

  onCategoryChanged(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
