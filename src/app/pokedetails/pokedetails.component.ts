import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent {
  constructor(public pokeapiService: PokeapiService) { }

}
