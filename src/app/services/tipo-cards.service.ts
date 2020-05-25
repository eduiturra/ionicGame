import { Injectable } from '@angular/core';
import { TiposCards } from '../models/tipos-cards.model';

@Injectable({
  providedIn: 'root'
})
export class TipoCardsService {

  constructor() { }

  getDataCards(tipo: number): TiposCards{
    switch (tipo) {
      case 0:
      case 1:
        return {
          id: tipo,
          descripcion: 'Descripción de Premio',
          nombre: 'Premio',
          route: '/premio'
        };
        case 2:
          return {
            id: tipo,
            descripcion: 'Descripción de Bomba',
            nombre: 'Bomba',
            route: '/bomba'
          };
        case 3:
        case 4:
          return {
            id: tipo,
            descripcion: 'Descripción de Quiz',
            nombre: 'Quiz',
            route: '/quiz'
          };
        case 5:
        case 6:
          return {
            id: tipo,
            descripcion: 'Descripción de Adivinanzas',
            nombre: 'Adivinanzas',
            route: '/adivinanzas'
          };
        case 8:
        case 9:
          return {
            id: tipo,
            descripcion: 'Descripción de Cantidad Palabras',
            nombre: 'Cantidad Palabras',
            route: '/palabras'
          };
        case 7:
          return {
            id: tipo,
            descripcion: 'Descripción de Verdadero Falseo',
            nombre: 'Verdadero Falso',
            route: '/vf'
          };
      default:
        return null;
    }
  }
}
