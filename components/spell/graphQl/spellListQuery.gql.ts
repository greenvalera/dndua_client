import {gql} from "@apollo/client";

const SPELL_LIST_QUERY = gql`
  query SpellListQuery {
    spellList {
      id
      description
      name
      enName
      classes {
        id
      }
      attributes {
        level
        school
        duration
        castingTime
        saveRequired
        attackType
        ritual
        concentration
        componentVerbal
        componentSomatic
        componentMaterial
      }
    }
  }
`;

export default SPELL_LIST_QUERY;