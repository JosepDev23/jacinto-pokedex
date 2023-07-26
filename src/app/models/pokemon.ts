import { StatType } from "./statType"

export default interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  stats: {
    base_stat: number
    stat: { name: StatType }
  }[]
  types: { type: { name: string } }[]
}