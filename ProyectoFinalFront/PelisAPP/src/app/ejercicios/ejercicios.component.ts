import { Component } from '@angular/core';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente2Component } from '../componente2/componente2.component';
import { Componente3Component } from '../componente3/componente3.component';

@Component({
  selector: 'app-ejercicios',
  imports: [Componente1Component,Componente2Component,Componente3Component],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css',
})
export class EjerciciosComponent {}