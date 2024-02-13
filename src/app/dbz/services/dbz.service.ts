import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  /* recibimos el evento agregar  */

  addNewCharacter(character: Character): void {

    /* creamos el metodo diciendo que llene todo lo que tiene el id */

    const newCharacter: Character = {id: uuid(),...character}
    /* el metodo push agrega el elemento al final  */
    this.characters.push(character);
  }

  /* recibimos el evento eliminar */

  deleteCharacterById(id: string) {

    /* El metodo splice elimina el item con el 1 le decimos que solo borre 1  */
    this.characters = this.characters.filter(character => character.id !== id);
  }



}
