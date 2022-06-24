import {gql} from "@apollo/client";

const SPELL_QUERY = gql`
  query SpellQuery($id: String!) {
    spell(id: $id) {
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

export default SPELL_QUERY;