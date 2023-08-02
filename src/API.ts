/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSourceInput = {
  id?: string | null,
  name: string,
  nameTranslated?: string | null,
  code: string,
  isOfficial: boolean,
};

export type ModelSourceConditionInput = {
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  code?: ModelStringInput | null,
  isOfficial?: ModelBooleanInput | null,
  and?: Array< ModelSourceConditionInput | null > | null,
  or?: Array< ModelSourceConditionInput | null > | null,
  not?: ModelSourceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Source = {
  __typename: "Source",
  id: string,
  name: string,
  nameTranslated?: string | null,
  code: string,
  isOfficial: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSourceInput = {
  id: string,
  name?: string | null,
  nameTranslated?: string | null,
  code?: string | null,
  isOfficial?: boolean | null,
};

export type DeleteSourceInput = {
  id: string,
};

export type CreateRaceInput = {
  id?: string | null,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  raceSourceId: string,
};

export type ModelRaceConditionInput = {
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Race = {
  __typename: "Race",
  id: string,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  source: Source,
  createdAt: string,
  updatedAt: string,
  raceSourceId: string,
};

export type UpdateRaceInput = {
  id: string,
  name?: string | null,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  raceSourceId?: string | null,
};

export type DeleteRaceInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  classSourceId: string,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  classSourceId?: ModelIDInput | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  source: Source,
  subclasses?: ModelSubclassConnection | null,
  spells?: ModelSpellClassConnection | null,
  createdAt: string,
  updatedAt: string,
  classSourceId: string,
};

export type ModelSubclassConnection = {
  __typename: "ModelSubclassConnection",
  items:  Array<Subclass | null >,
  nextToken?: string | null,
};

export type Subclass = {
  __typename: "Subclass",
  id: string,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  class: Class,
  source: Source,
  createdAt: string,
  updatedAt: string,
  classSubclassesId?: string | null,
  subclassSourceId: string,
};

export type ModelSpellClassConnection = {
  __typename: "ModelSpellClassConnection",
  items:  Array<SpellClass | null >,
  nextToken?: string | null,
};

export type SpellClass = {
  __typename: "SpellClass",
  id: string,
  classId: string,
  spellId: string,
  class: Class,
  spell: Spell,
  createdAt: string,
  updatedAt: string,
};

export type Spell = {
  __typename: "Spell",
  id: string,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  source: Source,
  classes?: ModelSpellClassConnection | null,
  level: number,
  school: Schools,
  concentration: boolean,
  ritual: boolean,
  castingTime: CastingTime,
  componentVerbal: boolean,
  componentSomatic: boolean,
  componentMaterial: boolean,
  attackType: AttackType,
  duration: SpellDuration,
  saveRequired: Abilities,
  createdAt: string,
  updatedAt: string,
  spellSourceId: string,
};

export enum Schools {
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
}


export enum CastingTime {
  ACTION = "ACTION",
  BONUS_ACTION = "BONUS_ACTION",
  REACTION = "REACTION",
  M1 = "M1",
  M10 = "M10",
  H1 = "H1",
  H8 = "H8",
  H12 = "H12",
  H24 = "H24",
}


export enum AttackType {
  RANGE = "RANGE",
  MELEE = "MELEE",
  SELF = "SELF",
}


export enum SpellDuration {
  INSTANTLY = "INSTANTLY",
  M1 = "M1",
  M10 = "M10",
  H1 = "H1",
  H8 = "H8",
  H12 = "H12",
  H24 = "H24",
}


export enum Abilities {
  NONE = "NONE",
  STRENGTH = "STRENGTH",
  DEXTERITY = "DEXTERITY",
  CONSTITUTION = "CONSTITUTION",
  INTELLIGENCE = "INTELLIGENCE",
  WISDOM = "WISDOM",
  CHARISMA = "CHARISMA",
}


export type UpdateClassInput = {
  id: string,
  name?: string | null,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  classSourceId?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateSubclassInput = {
  id?: string | null,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  classSubclassesId?: string | null,
  subclassSourceId: string,
};

export type ModelSubclassConditionInput = {
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelSubclassConditionInput | null > | null,
  or?: Array< ModelSubclassConditionInput | null > | null,
  not?: ModelSubclassConditionInput | null,
  classSubclassesId?: ModelIDInput | null,
  subclassSourceId?: ModelIDInput | null,
};

export type UpdateSubclassInput = {
  id: string,
  name?: string | null,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  classSubclassesId?: string | null,
  subclassSourceId?: string | null,
};

export type DeleteSubclassInput = {
  id: string,
};

export type CreateSpellInput = {
  id?: string | null,
  name: string,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  level: number,
  school: Schools,
  concentration: boolean,
  ritual: boolean,
  castingTime: CastingTime,
  componentVerbal: boolean,
  componentSomatic: boolean,
  componentMaterial: boolean,
  attackType: AttackType,
  duration: SpellDuration,
  saveRequired: Abilities,
  spellSourceId: string,
};

export type ModelSpellConditionInput = {
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  level?: ModelIntInput | null,
  school?: ModelSchoolsInput | null,
  concentration?: ModelBooleanInput | null,
  ritual?: ModelBooleanInput | null,
  castingTime?: ModelCastingTimeInput | null,
  componentVerbal?: ModelBooleanInput | null,
  componentSomatic?: ModelBooleanInput | null,
  componentMaterial?: ModelBooleanInput | null,
  attackType?: ModelAttackTypeInput | null,
  duration?: ModelSpellDurationInput | null,
  saveRequired?: ModelAbilitiesInput | null,
  and?: Array< ModelSpellConditionInput | null > | null,
  or?: Array< ModelSpellConditionInput | null > | null,
  not?: ModelSpellConditionInput | null,
  spellSourceId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSchoolsInput = {
  eq?: Schools | null,
  ne?: Schools | null,
};

export type ModelCastingTimeInput = {
  eq?: CastingTime | null,
  ne?: CastingTime | null,
};

export type ModelAttackTypeInput = {
  eq?: AttackType | null,
  ne?: AttackType | null,
};

export type ModelSpellDurationInput = {
  eq?: SpellDuration | null,
  ne?: SpellDuration | null,
};

export type ModelAbilitiesInput = {
  eq?: Abilities | null,
  ne?: Abilities | null,
};

export type UpdateSpellInput = {
  id: string,
  name?: string | null,
  nameTranslated?: string | null,
  content?: string | null,
  image?: string | null,
  level?: number | null,
  school?: Schools | null,
  concentration?: boolean | null,
  ritual?: boolean | null,
  castingTime?: CastingTime | null,
  componentVerbal?: boolean | null,
  componentSomatic?: boolean | null,
  componentMaterial?: boolean | null,
  attackType?: AttackType | null,
  duration?: SpellDuration | null,
  saveRequired?: Abilities | null,
  spellSourceId?: string | null,
};

export type DeleteSpellInput = {
  id: string,
};

export type CreateSpellClassInput = {
  id?: string | null,
  classId: string,
  spellId: string,
};

export type ModelSpellClassConditionInput = {
  classId?: ModelIDInput | null,
  spellId?: ModelIDInput | null,
  and?: Array< ModelSpellClassConditionInput | null > | null,
  or?: Array< ModelSpellClassConditionInput | null > | null,
  not?: ModelSpellClassConditionInput | null,
};

export type UpdateSpellClassInput = {
  id: string,
  classId?: string | null,
  spellId?: string | null,
};

export type DeleteSpellClassInput = {
  id: string,
};

export type ModelSourceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  code?: ModelStringInput | null,
  isOfficial?: ModelBooleanInput | null,
  and?: Array< ModelSourceFilterInput | null > | null,
  or?: Array< ModelSourceFilterInput | null > | null,
  not?: ModelSourceFilterInput | null,
};

export type ModelSourceConnection = {
  __typename: "ModelSourceConnection",
  items:  Array<Source | null >,
  nextToken?: string | null,
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  classSourceId?: ModelIDInput | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelSubclassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelSubclassFilterInput | null > | null,
  or?: Array< ModelSubclassFilterInput | null > | null,
  not?: ModelSubclassFilterInput | null,
  classSubclassesId?: ModelIDInput | null,
  subclassSourceId?: ModelIDInput | null,
};

export type ModelSpellFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameTranslated?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  level?: ModelIntInput | null,
  school?: ModelSchoolsInput | null,
  concentration?: ModelBooleanInput | null,
  ritual?: ModelBooleanInput | null,
  castingTime?: ModelCastingTimeInput | null,
  componentVerbal?: ModelBooleanInput | null,
  componentSomatic?: ModelBooleanInput | null,
  componentMaterial?: ModelBooleanInput | null,
  attackType?: ModelAttackTypeInput | null,
  duration?: ModelSpellDurationInput | null,
  saveRequired?: ModelAbilitiesInput | null,
  and?: Array< ModelSpellFilterInput | null > | null,
  or?: Array< ModelSpellFilterInput | null > | null,
  not?: ModelSpellFilterInput | null,
  spellSourceId?: ModelIDInput | null,
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
};

export type ModelSpellClassFilterInput = {
  id?: ModelIDInput | null,
  classId?: ModelIDInput | null,
  spellId?: ModelIDInput | null,
  and?: Array< ModelSpellClassFilterInput | null > | null,
  or?: Array< ModelSpellClassFilterInput | null > | null,
  not?: ModelSpellClassFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSourceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameTranslated?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  isOfficial?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionSourceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSourceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameTranslated?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionRaceFilterInput | null > | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameTranslated?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
};

export type ModelSubscriptionSubclassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameTranslated?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubclassFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubclassFilterInput | null > | null,
};

export type ModelSubscriptionSpellFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameTranslated?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  school?: ModelSubscriptionStringInput | null,
  concentration?: ModelSubscriptionBooleanInput | null,
  ritual?: ModelSubscriptionBooleanInput | null,
  castingTime?: ModelSubscriptionStringInput | null,
  componentVerbal?: ModelSubscriptionBooleanInput | null,
  componentSomatic?: ModelSubscriptionBooleanInput | null,
  componentMaterial?: ModelSubscriptionBooleanInput | null,
  attackType?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionStringInput | null,
  saveRequired?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpellFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpellFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSpellClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  classId?: ModelSubscriptionIDInput | null,
  spellId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSpellClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpellClassFilterInput | null > | null,
};

export type CreateSourceMutationVariables = {
  input: CreateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type CreateSourceMutation = {
  createSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSourceMutationVariables = {
  input: UpdateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type UpdateSourceMutation = {
  updateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSourceMutationVariables = {
  input: DeleteSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type DeleteSourceMutation = {
  deleteSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRaceMutationVariables = {
  input: CreateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type CreateRaceMutation = {
  createRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type UpdateRaceMutationVariables = {
  input: UpdateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type UpdateRaceMutation = {
  updateRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type DeleteRaceMutationVariables = {
  input: DeleteRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type DeleteRaceMutation = {
  deleteRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type CreateSubclassMutationVariables = {
  input: CreateSubclassInput,
  condition?: ModelSubclassConditionInput | null,
};

export type CreateSubclassMutation = {
  createSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type UpdateSubclassMutationVariables = {
  input: UpdateSubclassInput,
  condition?: ModelSubclassConditionInput | null,
};

export type UpdateSubclassMutation = {
  updateSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type DeleteSubclassMutationVariables = {
  input: DeleteSubclassInput,
  condition?: ModelSubclassConditionInput | null,
};

export type DeleteSubclassMutation = {
  deleteSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type CreateSpellMutationVariables = {
  input: CreateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type CreateSpellMutation = {
  createSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type UpdateSpellMutationVariables = {
  input: UpdateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type UpdateSpellMutation = {
  updateSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type DeleteSpellMutationVariables = {
  input: DeleteSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type DeleteSpellMutation = {
  deleteSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type CreateSpellClassMutationVariables = {
  input: CreateSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type CreateSpellClassMutation = {
  createSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpellClassMutationVariables = {
  input: UpdateSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type UpdateSpellClassMutation = {
  updateSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpellClassMutationVariables = {
  input: DeleteSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type DeleteSpellClassMutation = {
  deleteSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSourceQueryVariables = {
  id: string,
};

export type GetSourceQuery = {
  getSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSourcesQueryVariables = {
  filter?: ModelSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSourcesQuery = {
  listSources?:  {
    __typename: "ModelSourceConnection",
    items:  Array< {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRaceQueryVariables = {
  id: string,
};

export type GetRaceQuery = {
  getRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type ListRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacesQuery = {
  listRaces?:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      raceSourceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubclassQueryVariables = {
  id: string,
};

export type GetSubclassQuery = {
  getSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type ListSubclassesQueryVariables = {
  filter?: ModelSubclassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubclassesQuery = {
  listSubclasses?:  {
    __typename: "ModelSubclassConnection",
    items:  Array< {
      __typename: "Subclass",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSourceId: string,
      },
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      classSubclassesId?: string | null,
      subclassSourceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpellQueryVariables = {
  id: string,
};

export type GetSpellQuery = {
  getSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type ListSpellsQueryVariables = {
  filter?: ModelSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellsQuery = {
  listSpells?:  {
    __typename: "ModelSpellConnection",
    items:  Array< {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpellClassQueryVariables = {
  id: string,
};

export type GetSpellClassQuery = {
  getSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpellClassesQueryVariables = {
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellClassesQuery = {
  listSpellClasses?:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      classId: string,
      spellId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSourceId: string,
      },
      spell:  {
        __typename: "Spell",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        level: number,
        school: Schools,
        concentration: boolean,
        ritual: boolean,
        castingTime: CastingTime,
        componentVerbal: boolean,
        componentSomatic: boolean,
        componentMaterial: boolean,
        attackType: AttackType,
        duration: SpellDuration,
        saveRequired: Abilities,
        createdAt: string,
        updatedAt: string,
        spellSourceId: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SpellClassesByClassIdQueryVariables = {
  classId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SpellClassesByClassIdQuery = {
  spellClassesByClassId?:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      classId: string,
      spellId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSourceId: string,
      },
      spell:  {
        __typename: "Spell",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        level: number,
        school: Schools,
        concentration: boolean,
        ritual: boolean,
        castingTime: CastingTime,
        componentVerbal: boolean,
        componentSomatic: boolean,
        componentMaterial: boolean,
        attackType: AttackType,
        duration: SpellDuration,
        saveRequired: Abilities,
        createdAt: string,
        updatedAt: string,
        spellSourceId: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SpellClassesBySpellIdQueryVariables = {
  spellId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SpellClassesBySpellIdQuery = {
  spellClassesBySpellId?:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      classId: string,
      spellId: string,
      class:  {
        __typename: "Class",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSourceId: string,
      },
      spell:  {
        __typename: "Spell",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        level: number,
        school: Schools,
        concentration: boolean,
        ritual: boolean,
        castingTime: CastingTime,
        componentVerbal: boolean,
        componentSomatic: boolean,
        componentMaterial: boolean,
        attackType: AttackType,
        duration: SpellDuration,
        saveRequired: Abilities,
        createdAt: string,
        updatedAt: string,
        spellSourceId: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnCreateSourceSubscription = {
  onCreateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnUpdateSourceSubscription = {
  onUpdateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnDeleteSourceSubscription = {
  onDeleteSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    nameTranslated?: string | null,
    code: string,
    isOfficial: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnCreateRaceSubscription = {
  onCreateRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type OnUpdateRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnUpdateRaceSubscription = {
  onUpdateRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type OnDeleteRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnDeleteRaceSubscription = {
  onDeleteRace?:  {
    __typename: "Race",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceSourceId: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    subclasses?:  {
      __typename: "ModelSubclassConnection",
      items:  Array< {
        __typename: "Subclass",
        id: string,
        name: string,
        nameTranslated?: string | null,
        content?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        classSubclassesId?: string | null,
        subclassSourceId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    spells?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
  } | null,
};

export type OnCreateSubclassSubscriptionVariables = {
  filter?: ModelSubscriptionSubclassFilterInput | null,
};

export type OnCreateSubclassSubscription = {
  onCreateSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type OnUpdateSubclassSubscriptionVariables = {
  filter?: ModelSubscriptionSubclassFilterInput | null,
};

export type OnUpdateSubclassSubscription = {
  onUpdateSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type OnDeleteSubclassSubscriptionVariables = {
  filter?: ModelSubscriptionSubclassFilterInput | null,
};

export type OnDeleteSubclassSubscription = {
  onDeleteSubclass?:  {
    __typename: "Subclass",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    classSubclassesId?: string | null,
    subclassSourceId: string,
  } | null,
};

export type OnCreateSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnCreateSpellSubscription = {
  onCreateSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type OnUpdateSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnUpdateSpellSubscription = {
  onUpdateSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type OnDeleteSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnDeleteSpellSubscription = {
  onDeleteSpell?:  {
    __typename: "Spell",
    id: string,
    name: string,
    nameTranslated?: string | null,
    content?: string | null,
    image?: string | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      nameTranslated?: string | null,
      code: string,
      isOfficial: boolean,
      createdAt: string,
      updatedAt: string,
    },
    classes?:  {
      __typename: "ModelSpellClassConnection",
      items:  Array< {
        __typename: "SpellClass",
        id: string,
        classId: string,
        spellId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    level: number,
    school: Schools,
    concentration: boolean,
    ritual: boolean,
    castingTime: CastingTime,
    componentVerbal: boolean,
    componentSomatic: boolean,
    componentMaterial: boolean,
    attackType: AttackType,
    duration: SpellDuration,
    saveRequired: Abilities,
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
  } | null,
};

export type OnCreateSpellClassSubscriptionVariables = {
  filter?: ModelSubscriptionSpellClassFilterInput | null,
};

export type OnCreateSpellClassSubscription = {
  onCreateSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpellClassSubscriptionVariables = {
  filter?: ModelSubscriptionSpellClassFilterInput | null,
};

export type OnUpdateSpellClassSubscription = {
  onUpdateSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpellClassSubscriptionVariables = {
  filter?: ModelSubscriptionSpellClassFilterInput | null,
};

export type OnDeleteSpellClassSubscription = {
  onDeleteSpellClass?:  {
    __typename: "SpellClass",
    id: string,
    classId: string,
    spellId: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      subclasses?:  {
        __typename: "ModelSubclassConnection",
        nextToken?: string | null,
      } | null,
      spells?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
    },
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      nameTranslated?: string | null,
      content?: string | null,
      image?: string | null,
      source:  {
        __typename: "Source",
        id: string,
        name: string,
        nameTranslated?: string | null,
        code: string,
        isOfficial: boolean,
        createdAt: string,
        updatedAt: string,
      },
      classes?:  {
        __typename: "ModelSpellClassConnection",
        nextToken?: string | null,
      } | null,
      level: number,
      school: Schools,
      concentration: boolean,
      ritual: boolean,
      castingTime: CastingTime,
      componentVerbal: boolean,
      componentSomatic: boolean,
      componentMaterial: boolean,
      attackType: AttackType,
      duration: SpellDuration,
      saveRequired: Abilities,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
