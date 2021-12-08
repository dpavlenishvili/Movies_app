import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from "rxjs";
import {Category} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  selectedCategory: Category = {
    id: 0,
    name: 'All',
    selected: true
  };
  @Output() categoryChanged: EventEmitter<Category> = new EventEmitter<Category>();
  $categories!: Observable<Array<Category>>

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.$categories = this.movieService.getCategories()
  }

  onItemClick({itemData}: {itemData: Category}): void {
    this.onCategoryChange(itemData);
  }

  onCategoryChange(category: Category): void {
    this.selectedCategory = category;
    this.categoryChanged.emit(this.selectedCategory);
  }
}
