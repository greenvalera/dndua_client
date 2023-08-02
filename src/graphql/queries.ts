/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSource = /* GraphQL */ `
  query GetSource($id: ID!) {
    getSource(id: $id) {
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
export const listSources = /* GraphQL */ `
  query ListSources(
    $filter: ModelSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        nameTranslated
        code
        isOfficial
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
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
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSubclass = /* GraphQL */ `
  query GetSubclass($id: ID!) {
    getSubclass(id: $id) {
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
export const listSubclasses = /* GraphQL */ `
  query ListSubclasses(
    $filter: ModelSubclassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubclasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSpell = /* GraphQL */ `
  query GetSpell($id: ID!) {
    getSpell(id: $id) {
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
export const listSpells = /* GraphQL */ `
  query ListSpells(
    $filter: ModelSpellFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpells(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSpellClass = /* GraphQL */ `
  query GetSpellClass($id: ID!) {
    getSpellClass(id: $id) {
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
export const listSpellClasses = /* GraphQL */ `
  query ListSpellClasses(
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpellClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classId
        spellId
        class {
          id
          name
          nameTranslated
          content
          image
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
      nextToken
      __typename
    }
  }
`;
export const spellClassesByClassId = /* GraphQL */ `
  query SpellClassesByClassId(
    $classId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spellClassesByClassId(
      classId: $classId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        spellId
        class {
          id
          name
          nameTranslated
          content
          image
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
      nextToken
      __typename
    }
  }
`;
export const spellClassesBySpellId = /* GraphQL */ `
  query SpellClassesBySpellId(
    $spellId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spellClassesBySpellId(
      spellId: $spellId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        spellId
        class {
          id
          name
          nameTranslated
          content
          image
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
      nextToken
      __typename
    }
  }
`;
