import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi/pokeapi.service';
import Pokemon from '../../models/pokemon';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokemons: Pokemon[] = []

  constructor(private pokeapiService: PokeapiService) { }

  private retrievePokemonById(id: number) {
    this.pokeapiService.getPokemonByIdOrName(id).subscribe({
      next: (pokemon: Pokemon) => {
        this.pokemons.push(pokemon)
      },
      error: (error) => {
        console.error('Error get pokemon', error)
      }
    })
  }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.retrievePokemonById(i)
    }
  }

  loadMorePokemon(): void {
    const pokemonsSize = this.pokemons.length +1
    for (let i = pokemonsSize; i < pokemonsSize + 20; i++) {
      this.retrievePokemonById(i)
    }
  }
}
