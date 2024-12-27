import { Component, OnInit } from '@angular/core';
import { CommonModule , NgIf, NgFor } from '@angular/common';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true, 
  imports: [CommonModule, MovieItemComponent, NgFor, NgIf],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies(); 
  }

  onMovieSelected(movieTitle: string): void {
    console.log(`Recibido en MovieListComponent: ${movieTitle}`);
    this.selectedMovie = movieTitle;
  }
}