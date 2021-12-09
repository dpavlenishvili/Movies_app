import {Component, EventEmitter, Output} from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Output() categoryChanged = new EventEmitter<number>();

  selectedCategoryId = -1;
  $categories: Observable<Array<Category>>;

  constructor(
    private movieService: MovieService
  ) {
    this.$categories = this.movieService.getCategories().pipe(
      map(categories => [
        {
          id: -1,
          name: 'All',
        },
        ...categories,
      ])
    );
  }

  onItemClick({itemData}: { itemData: Category }): void {
    this.onCategoryChange(itemData);
  }

  onCategoryChange(category: Category): void {
    this.selectedCategoryId = category.id;
    this.categoryChanged.emit(this.selectedCategoryId);
  }

  isCategorySelected = (category: Category) => {
    return category.id === this.selectedCategoryId
  }
}
