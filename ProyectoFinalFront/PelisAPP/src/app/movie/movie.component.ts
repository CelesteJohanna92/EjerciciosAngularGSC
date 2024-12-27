import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SearchBarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-movie',
  imports: [MovieListComponent, SearchBarComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

}
