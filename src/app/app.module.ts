import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,


/*
importamos el modulo creado dbzmodule
*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Dentro de este archivo vamos a colocar los modulos que van a ser mostradas como pagina principal */
