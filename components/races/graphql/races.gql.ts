import {gql} from "@apollo/client";

export const RACES_QUERY = gql`
  query RacesQuery {
    races {
      id
    }
  }
`;