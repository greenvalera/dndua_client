/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSource = /* GraphQL */ `
  mutation CreateSource(
    $input: CreateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    createSource(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      code
      isOfficial
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSource = /* GraphQL */ `
  mutation UpdateSource(
    $input: UpdateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    updateSource(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      code
      isOfficial
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSource = /* GraphQL */ `
  mutation DeleteSource(
    $input: DeleteSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    deleteSource(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      code
      isOfficial
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $input: CreateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    createRace(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      raceSourceId
      __typename
    }
  }
`;
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      raceSourceId
      __typename
    }
  }
`;
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      raceSourceId
      __typename
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      subclasses {
        items {
          id
          name
          nameTranslated
          content
          image
          createdAt
          updatedAt
          classSubclassesId
          subclassSourceId
          __typename
        }
        nextToken
        __typename
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      classSourceId
      __typename
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      subclasses {
        items {
          id
          name
          nameTranslated
          content
          image
          createdAt
          updatedAt
          classSubclassesId
          subclassSourceId
          __typename
        }
        nextToken
        __typename
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      classSourceId
      __typename
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      subclasses {
        items {
          id
          name
          nameTranslated
          content
          image
          createdAt
          updatedAt
          classSubclassesId
          subclassSourceId
          __typename
        }
        nextToken
        __typename
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      classSourceId
      __typename
    }
  }
`;
export const createSubclass = /* GraphQL */ `
  mutation CreateSubclass(
    $input: CreateSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    createSubclass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
      __typename
    }
  }
`;
export const updateSubclass = /* GraphQL */ `
  mutation UpdateSubclass(
    $input: UpdateSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    updateSubclass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
      __typename
    }
  }
`;
export const deleteSubclass = /* GraphQL */ `
  mutation DeleteSubclass(
    $input: DeleteSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    deleteSubclass(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
      __typename
    }
  }
`;
export const createSpell = /* GraphQL */ `
  mutation CreateSpell(
    $input: CreateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    createSpell(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      school
      concentration
      ritual
      castingTime
      componentVerbal
      componentSomatic
      componentMaterial
      attackType
      duration
      saveRequired
      createdAt
      updatedAt
      spellSourceId
      __typename
    }
  }
`;
export const updateSpell = /* GraphQL */ `
  mutation UpdateSpell(
    $input: UpdateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    updateSpell(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      school
      concentration
      ritual
      castingTime
      componentVerbal
      componentSomatic
      componentMaterial
      attackType
      duration
      saveRequired
      createdAt
      updatedAt
      spellSourceId
      __typename
    }
  }
`;
export const deleteSpell = /* GraphQL */ `
  mutation DeleteSpell(
    $input: DeleteSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    deleteSpell(input: $input, condition: $condition) {
      id
      name
      nameTranslated
      content
      image
      source {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      school
      concentration
      ritual
      castingTime
      componentVerbal
      componentSomatic
      componentMaterial
      attackType
      duration
      saveRequired
      createdAt
      updatedAt
      spellSourceId
      __typename
    }
  }
`;
export const createSpellClass = /* GraphQL */ `
  mutation CreateSpellClass(
    $input: CreateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    createSpellClass(input: $input, condition: $condition) {
      id
      classId
      spellId
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      spell {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        classes {
          nextToken
          __typename
        }
        level
        school
        concentration
        ritual
        castingTime
        componentVerbal
        componentSomatic
        componentMaterial
        attackType
        duration
        saveRequired
        createdAt
        updatedAt
        spellSourceId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSpellClass = /* GraphQL */ `
  mutation UpdateSpellClass(
    $input: UpdateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    updateSpellClass(input: $input, condition: $condition) {
      id
      classId
      spellId
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      spell {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        classes {
          nextToken
          __typename
        }
        level
        school
        concentration
        ritual
        castingTime
        componentVerbal
        componentSomatic
        componentMaterial
        attackType
        duration
        saveRequired
        createdAt
        updatedAt
        spellSourceId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSpellClass = /* GraphQL */ `
  mutation DeleteSpellClass(
    $input: DeleteSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    deleteSpellClass(input: $input, condition: $condition) {
      id
      classId
      spellId
      class {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        subclasses {
          nextToken
          __typename
        }
        spells {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        classSourceId
        __typename
      }
      spell {
        id
        name
        nameTranslated
        content
        image
        source {
          id
          name
          nameTranslated
          code
          isOfficial
          createdAt
          updatedAt
          __typename
        }
        classes {
          nextToken
          __typename
        }
        level
        school
        concentration
        ritual
        castingTime
        componentVerbal
        componentSomatic
        componentMaterial
        attackType
        duration
        saveRequired
        createdAt
        updatedAt
        spellSourceId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
