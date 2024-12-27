import { Component, OnInit } from '@angular/core';
import { SeriesService, ApiResponse } from '../services/series.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  episodes: any[] = [];
  seriesTitle: string = 'Game Of Thrones';
  season: number = 1;
  totalSeasons: number = 8;
  errorMessage: string = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.seriesService.getEpisodes(this.seriesTitle, this.season).subscribe({
      next: (response: ApiResponse) => {
        console.log('Respuesta de la API:', response); 
        if (response.Response === 'True') {
          this.totalSeasons = Number(response.totalSeasons);
          this.episodes = response.Episodes; 
          this.errorMessage = '';
        } else {
          this.showError(`La serie "${this.seriesTitle}" no se encuentra.`);
        }
      },
      error: (error) => {
        console.error('Error en la llamada a la API:', error);
        this.showError('Error al conectar con el servidor.');
      },
    });
  }

  onSeasonChange(): void {
    this.loadEpisodes(); 
  }

  onSeriesTitleChange(): void {
    this.season = 1; 
    this.loadEpisodes();
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.episodes = [];
    this.totalSeasons = 1; 
  }
}