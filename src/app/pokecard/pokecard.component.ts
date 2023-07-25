import { Component, Input } from '@angular/core';
import Pokemon from '../models/pokemon';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent {

  @Input()
  pokemon!: Pokemon
  
}
