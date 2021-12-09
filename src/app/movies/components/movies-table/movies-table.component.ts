import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, Observable, of, startWith, Subject, switchMap, tap} from 'rxjs';
import {Category, Movie} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent {
  movies$: Observable<Movie[] | any>;
  category$ = new BehaviorSubject<number>(-1);

  selectedMovie: Movie | undefined;
  showMoviePopup: boolean = false;

  constructor(private movieService: MovieService) {
    this.movies$ = this.category$.pipe(
      distinctUntilChanged(),
      switchMap(category => this.movieService.getMovies(category)),
    );
  }

  @Input()
  set categoryId(categoryId: number) {
    this.category$.next(categoryId)
  }

  onRowClick({data}: {data: Movie }) {
    this.selectedMovie = data;
    this.showMoviePopup = !this.showMoviePopup;
  }
}
