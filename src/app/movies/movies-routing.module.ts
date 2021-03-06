import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MoviesComponent} from "./movies.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {
}
