import { gql } from "@apollo/client";

export const ALL_NOTES = gql`
  query AllNotes {
      notes(order_by: {id: desc}) {
          id
          text
      }
}
`;
