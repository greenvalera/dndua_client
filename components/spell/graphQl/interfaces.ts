import {AttackType, CastingTime, SaveRequired, Schools, SpellDuration} from "../enums/enums";
import {ClassesIds} from "../../classes/graphql";

interface SpellAttributes {
  level: number
  school: Schools
  duration: SpellDuration
  castingTime: CastingTime
  saveRequired: SaveRequired,
  attackType: AttackType,
  concentration: boolean
  componentVerbal: boolean
  componentSomatic: boolean
  componentMaterial: boolean
}

interface Class {
  id: ClassesIds
}

export interface SpellQueryResult {
  spell: {
    id: string
    description: string
    name: string
    enName: string
    classes: Class[]
    attributes: SpellAttributes
  }
}

export interface SpellQueryVariables {
  id: string
}