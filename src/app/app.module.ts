import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { PokeapiService } from './services/pokeapi/pokeapi.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokesearchComponent } from './pokesearch/pokesearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PokecardComponent,
    PokelistComponent,
    CapitalizePipe,
    PokesearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
