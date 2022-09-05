import { gql } from "@apollo/client";

export const NEW_NOTE = gql`
  mutation InsertNote($note: notes_insert_input!) {
    insert_notes_one(object: $note) {
      id
      text
    }
  }
`;