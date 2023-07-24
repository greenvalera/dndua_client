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
      code
      isOfficial
      createdAt
      updatedAt
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
      code
      isOfficial
      createdAt
      updatedAt
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
      code
      isOfficial
      createdAt
      updatedAt
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      raceSourceId
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      raceSourceId
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      raceSourceId
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
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
        }
        nextToken
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      classSourceId
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
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
        }
        nextToken
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      classSourceId
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
      content
      image
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
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
        }
        nextToken
      }
      spells {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      classSourceId
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
      }
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
      }
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
      }
      source {
        id
        name
        code
        isOfficial
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      classSubclassesId
      subclassSourceId
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
        code
        isOfficial
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
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
        code
        isOfficial
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
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
        code
        isOfficial
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          classId
          spellId
          createdAt
          updatedAt
        }
        nextToken
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
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
          code
          isOfficial
          createdAt
          updatedAt
        }
        classes {
          nextToken
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
      }
      createdAt
      updatedAt
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
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
          code
          isOfficial
          createdAt
          updatedAt
        }
        classes {
          nextToken
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
      }
      createdAt
      updatedAt
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
        content
        image
        source {
          id
          name
          code
          isOfficial
          createdAt
          updatedAt
        }
        subclasses {
          nextToken
        }
        spells {
          nextToken
        }
        createdAt
        updatedAt
        classSourceId
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
          code
          isOfficial
          createdAt
          updatedAt
        }
        classes {
          nextToken
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
      }
      createdAt
      updatedAt
    }
  }
`;
