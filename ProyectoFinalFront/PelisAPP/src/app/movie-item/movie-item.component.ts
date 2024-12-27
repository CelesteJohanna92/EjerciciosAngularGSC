import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],

})
export class MovieItemComponent {
  @Input()
  movie!: Movie; 
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie(): void {
    console.log(`Emitido: ${this.movie.title}`);
    this.movieSelected.emit(this.movie.title);
  }
}
