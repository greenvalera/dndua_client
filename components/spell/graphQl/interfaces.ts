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

export type Spell = {
  id: string
  description: string
  name: string
  enName: string
  classes: Class[]
  attributes: SpellAttributes
}

export interface SpellQueryResult {
  spell: Spell
}

export interface SpellListQueryResult{
  spellList: Spell[]
}

export interface SpellQueryVariables {
  id: string
}