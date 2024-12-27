import { Routes} from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';


export const routes: Routes = [
  { path: 'pelis', component: MovieComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'series', component: SeriesComponent },
  { path: '', redirectTo: '/pelis', pathMatch: 'full' }

];

