import {Component, Input, OnInit} from '@angular/core';
import {Observable, of, startWith} from 'rxjs';
import {Category, Movie} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent implements OnInit {
  @Input() $movies!: Observable<Array<Movie>>;
  @Input() selectedCategory!: Category;

  selectedMovie!: Movie;
  showMoviePopup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick({data}: {data: Movie }) {
    this.selectedMovie = data;
    this.showMoviePopup = !this.showMoviePopup;
  }
}
