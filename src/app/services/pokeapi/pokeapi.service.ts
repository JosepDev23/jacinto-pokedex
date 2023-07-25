import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import Pokemon from '../../models/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  selectedPokemon?: Pokemon

  getPokemonByIdOrName(value: string | number): Observable<Pokemon> {
    return this.http.get<any>(this.apiUrl + value)
  }

}
