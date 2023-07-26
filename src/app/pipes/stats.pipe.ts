import { Pipe, PipeTransform } from "@angular/core";
import { StatType } from "../models/statType";

@Pipe({ name: 'stat' })
export class StatPipe implements PipeTransform {
  transform(value: StatType) {
    switch (value) {
      case 'hp': return 'HP'
      case 'attack': return 'AT'
      case 'defense': return 'DE'
      case 'special-attack': return 'SA'
      case 'special-defense': return 'SD'
      case 'speed': return 'SP'
      default: return 'ERROR'
    }
  }
}