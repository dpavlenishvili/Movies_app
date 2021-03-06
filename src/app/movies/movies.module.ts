import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './movies.component';
import {MoviesTableComponent} from './components/movies-table/movies-table.component';
import {DxDataGridModule, DxMenuModule, DxPopupModule} from "devextreme-angular";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MoviePopupComponent} from './components/movie-popup/movie-popup.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  declarations: [
    MoviesTableComponent,
    MoviesComponent,
    MoviePopupComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    MoviesRoutingModule,
    DxPopupModule,
    DxMenuModule,
    UtilsModule
  ]
})
export class MoviesModule {
}
