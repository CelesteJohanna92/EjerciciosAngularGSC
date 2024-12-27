import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Movie[] {
    return [
      { title: 'Tomb Raider', year: 2018, description: 'La aventura de Lara Croft en busca de su padre', image: 'https://i.pinimg.com/736x/72/eb/d4/72ebd4e34453025de7a45301ca165e81.jpg' },
      { title: 'Moana', year: 2016, description: 'Una joven navegante busca salvar su isla', image: 'https://i.pinimg.com/736x/9c/d2/8d/9cd28dc76d2f733b7b4d160d714768ad.jpg' },
      { title: 'Princess and the Frog', year: 2009, description: 'Una joven sueña con abrir su propio restaurante', image: 'https://i.pinimg.com/736x/92/d4/86/92d486c76a8c22527703c90f8975db23.jpg' },
      { title: 'Jumanji', year: 2017, description: 'Un grupo de adolescentes se convierte en personajes de un videojuego', image: 'https://i.pinimg.com/736x/68/03/e9/6803e927550b18896e42be794ed34dfc.jpg' },
      { title: 'Zootopia', year: 2016, description: 'Una conejita policía y un zorro estafador trabajan juntos', image: 'https://i.pinimg.com/736x/c6/47/ed/c647ed93a3aa2df9fcfe1b6866276c18.jpg' },
      { title: 'Spider-Man', year: 2018, description: 'Un nuevo Spider-Man debe unirse a otros para salvar su mundo', image: 'https://i.pinimg.com/736x/52/c6/7c/52c67c44f3d5ee1dc976ed59f509f703.jpg' },
      { title: 'Aladdin', year: 2019, description: 'Un joven descubre una lámpara mágica y un genio', image: 'https://i.pinimg.com/736x/ed/18/9b/ed189b1590bb2176b7c490fc48cf79a2.jpg' },
      { title: 'Luca', year: 2021, description: 'Un verano en la Riviera italiana cambia la vida de un joven monstruo marino', image: 'https://i.pinimg.com/736x/0e/45/5c/0e455cbcad7e24608076b3828544e61d.jpg' },
      { title: 'Coco', year: 2017, description: 'Un joven músico es transportado a la Tierra de los Muertos', image: 'https://i.pinimg.com/736x/4e/18/34/4e183454cfd1514edca198df0f244855.jpg' },
      { title: 'Raya and the Last Dragon', year: 2021, description: 'Una guerrera busca al último dragón para unir su pueblo', image: 'https://i.pinimg.com/736x/59/e7/ba/59e7ba9abc4756edf620537e0cf3e301.jpg' }
    ];
  }


}