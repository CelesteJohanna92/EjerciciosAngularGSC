import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-componente3',
  imports: [NgFor],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  lista = [
    { nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
    { nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' },
    { nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' },
    { nombre: 'Elemento 4', descripcion: 'Descripción del elemento 4' },
  ];
}
