import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';
import {DxDataGridModule} from "devextreme-angular";

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesTableComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
  ]
})
export class MoviesModule { }
