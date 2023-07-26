import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi/pokeapi.service';
import Pokemon from '../../models/pokemon';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokemons: Pokemon[] = []

  constructor(private pokeapiService: PokeapiService) { }

  private async retrievePokemonById(id: number) {
    try {
      const pokemon = await firstValueFrom(this.pokeapiService.getPokemonByIdOrName(id))
      this.pokemons.push(pokemon)
    } catch (error) {
      console.error('Error get pokemon', error)
    }
  }

  async ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      await this.retrievePokemonById(i)
    }
  }

  async loadMorePokemon() {
    const pokemonsSize = this.pokemons.length + 1
    for (let i = pokemonsSize; i < pokemonsSize + 20; i++) {
      await this.retrievePokemonById(i)
    }
  }
}
