import {gql} from "@apollo/client";

const DELETE_SPELL = gql`
  mutation DeleteSpellMutation($id: String!) {
    deleteSpell(id: $id) {
      id
    }
  }
`;

export default DELETE_SPELL;