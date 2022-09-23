import {gql} from "@apollo/client";

export const CLASSES_QUERY = gql`
  query ClassesQuery {
    classes {
      id
    }
  }
`;