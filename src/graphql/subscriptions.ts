/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSource = /* GraphQL */ `
  subscription OnCreateSource($filter: ModelSubscriptionSourceFilterInput) {
    onCreateSource(filter: $filter) {
      id
      name
      code
      isOfficial
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSource = /* GraphQL */ `
  subscription OnUpdateSource($filter: ModelSubscriptionSourceFilterInput) {
    onUpdateSource(filter: $filter) {
      id
      name
      code
      isOfficial
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSource = /* GraphQL */ `
  subscription OnDeleteSource($filter: ModelSubscriptionSourceFilterInput) {
    onDeleteSource(filter: $filter) {
      id
      name
      code
      isOfficial
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onCreateSubclass = /* GraphQL */ `
  subscription OnCreateSubclass($filter: ModelSubscriptionSubclassFilterInput) {
    onCreateSubclass(filter: $filter) {
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
export const onUpdateSubclass = /* GraphQL */ `
  subscription OnUpdateSubclass($filter: ModelSubscriptionSubclassFilterInput) {
    onUpdateSubclass(filter: $filter) {
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
export const onDeleteSubclass = /* GraphQL */ `
  subscription OnDeleteSubclass($filter: ModelSubscriptionSubclassFilterInput) {
    onDeleteSubclass(filter: $filter) {
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
export const onCreateSpell = /* GraphQL */ `
  subscription OnCreateSpell($filter: ModelSubscriptionSpellFilterInput) {
    onCreateSpell(filter: $filter) {
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
export const onUpdateSpell = /* GraphQL */ `
  subscription OnUpdateSpell($filter: ModelSubscriptionSpellFilterInput) {
    onUpdateSpell(filter: $filter) {
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
export const onDeleteSpell = /* GraphQL */ `
  subscription OnDeleteSpell($filter: ModelSubscriptionSpellFilterInput) {
    onDeleteSpell(filter: $filter) {
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
export const onCreateSpellClass = /* GraphQL */ `
  subscription OnCreateSpellClass(
    $filter: ModelSubscriptionSpellClassFilterInput
  ) {
    onCreateSpellClass(filter: $filter) {
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
export const onUpdateSpellClass = /* GraphQL */ `
  subscription OnUpdateSpellClass(
    $filter: ModelSubscriptionSpellClassFilterInput
  ) {
    onUpdateSpellClass(filter: $filter) {
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
export const onDeleteSpellClass = /* GraphQL */ `
  subscription OnDeleteSpellClass(
    $filter: ModelSubscriptionSpellClassFilterInput
  ) {
    onDeleteSpellClass(filter: $filter) {
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
