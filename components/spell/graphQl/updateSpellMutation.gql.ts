import {gql} from "@apollo/client";

const UPDATE_SPELL_MUTATION = gql`
  mutation UPDATE_SPELL_MUTATION($id: String!, $params: CreateSpellDto!) {
    updateSpell(id: $id, params: $params) {
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

export default UPDATE_SPELL_MUTATION;