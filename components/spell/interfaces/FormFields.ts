import {AttackType, CastingTime, SaveRequired, Schools, SpellDuration} from "../enums/enums";
import {ClassesIds} from "../../classes/graphql";

export interface FormFields {
  name?: string,
  enName?: string,
  level?: number,
  school?: Schools,
  concentration?: boolean,
  ritual?: boolean,
  castingTime?: CastingTime,
  componentVerbal?: boolean,
  componentSomatic?: boolean,
  componentMaterial?: boolean,
  attackType?: AttackType,
  duration?: SpellDuration,
  saveRequired?: SaveRequired,
  classes: ClassesIds[],
  description: string,
}