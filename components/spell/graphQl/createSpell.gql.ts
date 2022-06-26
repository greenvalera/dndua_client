import {gql} from "@apollo/client";

const CREATE_SPELL_MUTATION = gql`
  mutation CreteSpellQuery($params: CreateSpellDto!) {
    createSpell(params: $params) {
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

export default CREATE_SPELL_MUTATION