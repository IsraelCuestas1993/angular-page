import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

/* a-component ----crea el componente y remobramos para el uso */
@Component({
  /* este nombre es el que se va al app-component para que se muestre lo del html
  <app-dbz-mainpage></app-dbz-mainpage>
  */
  selector: 'app-dbz-main-page',
  /* El template hace referencia al archivo html que tiene el mismo nombre
   main.component.html
*/
  templateUrl: './main-page.component.html',
})

/* se coloca como export el MainPageComponent por se le indica que puede ser
usado en otra parte del codigo
*/
export class MainPageComponet {
  constructor(private dbzService:DbzService) {}

  get characters (): Character []{
    return [...this.dbzService.characters];
  }
onDeleteCharacter (id:string): void {

  this.dbzService.deleteCharacterById(id);

}

onNewCharacter (character: Character): void {

  this.dbzService.addNewCharacter(character);
}
}
