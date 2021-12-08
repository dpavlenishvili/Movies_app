import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent implements OnInit {

  $movies: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
