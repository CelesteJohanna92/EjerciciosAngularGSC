import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componente1',
  imports: [NgIf],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  mensaje1: string = 'Este es el mensaje 1';
  mensaje2: string = 'Este es el mensaje 2';
  mostrarMensaje: boolean = false;

}
