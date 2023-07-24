/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSource = /* GraphQL */ `
  query GetSource($id: ID!) {
    getSource(id: $id) {
      id
      name
      code
      isOfficial
      createdAt
      updatedAt
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
        code
        isOfficial
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
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
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
      nextToken
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
          content
          image
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
      nextToken
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
      nextToken
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
          content
          image
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
      nextToken
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
          content
          image
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
      nextToken
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
          content
          image
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
      nextToken
    }
  }
`;
