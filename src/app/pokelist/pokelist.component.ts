import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi/pokeapi.service';
import Pokemon from '../models/pokemon';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokemons: Pokemon[] = []

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.pokeapiService.getPokemonById(i).subscribe({
        next: (pokemon: Pokemon) => {
          this.pokemons.push(pokemon)
        },
        error: (error) => {
          console.error('Error get pokemon', error)
        }
      })
    }
  }
}
