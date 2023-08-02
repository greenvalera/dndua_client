/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSource = /* GraphQL */ `
  subscription OnCreateSource($filter: ModelSubscriptionSourceFilterInput) {
    onCreateSource(filter: $filter) {
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
export const onUpdateSource = /* GraphQL */ `
  subscription OnUpdateSource($filter: ModelSubscriptionSourceFilterInput) {
    onUpdateSource(filter: $filter) {
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
export const onDeleteSource = /* GraphQL */ `
  subscription OnDeleteSource($filter: ModelSubscriptionSourceFilterInput) {
    onDeleteSource(filter: $filter) {
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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
