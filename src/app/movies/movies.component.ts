import { Component, OnInit } from '@angular/core';
import {Category, Movie} from "./interfaces/movie.interface";
import {Observable, startWith} from "rxjs";
import {MovieService} from "./services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  selectedCategory: Category = {
    id: 0,
    name: 'All',
    selected: true
  };
  $movies!: Observable<Array<Movie>>;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.$movies = this.movieService.getMovies(this.selectedCategory).pipe(startWith([]))
  }

  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    this.getMovies();
  }
}
