import { Component, OnInit } from '@angular/core';
import Pokemon from '../models/pokemon';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent implements OnInit {

  findPokemon = new FormControl('')

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.findPokemon.valueChanges.pipe(
      debounceTime(300),
      tap(value => this.pokeapiService.getPokemonByIdOrName(value as string)
        .subscribe({
          next: (pokemon: Pokemon) => {
            this.pokeapiService.selectedPokemon = pokemon
          },
          error: () => {
            this.pokeapiService.selectedPokemon = { id: 0, name: 'not found', sprites: { front_default: '' }, stats: [], types: [] }
          }
        })
      )
    ).subscribe()
  }

  searchText: string = ''

}
