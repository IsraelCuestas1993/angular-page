/* se crea el modulo con el comando ng g m nombre del moodulo  */
import { NgModule } from '@angular/core';
/* sirve para usar todos los ngfor */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponet } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

/*
hacemos uso del MainPageComponent mismo que fue creado en el main-page.component
*/

@NgModule({
  declarations: [MainPageComponet, ListComponent, AddCharacterComponent],

  /* tambien lo exportamos para que pueda ser mostrado desde el mundo exterior*/

  /* El form module es propio de angular y es necesario importarlo para el uso de
  ngmodel
  */

  exports: [MainPageComponet],
  imports: [CommonModule, FormsModule],
})

/* colocamos nombre del modulo que va a ser importado en el app module component */
export class DbzModule {}
