import {gql} from "@apollo/client";

export const CREATE_SPELL_MUTATION = gql`
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
        concentration
        componentVerbal
        componentSomatic
        componentMaterial
      }
    }
  }
`;