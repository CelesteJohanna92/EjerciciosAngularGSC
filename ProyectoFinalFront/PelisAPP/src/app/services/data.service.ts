import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  private data = [
  {id: 1, nombre: 'Maria', edad: 45},
  {id: 2, nombre: 'Celeste', edad: 32},
  {id: 4, nombre: 'Nicolás', edad: 30},
  {id: 5, nombre: 'Eugenia', edad: 22},
]

getData() {
  return this.data
}
}
