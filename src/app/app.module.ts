import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokecardComponent } from './pokecard/pokecard.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokeapiService } from './pokeapi/pokeapi.service';


@NgModule({
  declarations: [
    AppComponent,
    PokecardComponent,
    PokelistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
