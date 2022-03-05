import { gql } from "@apollo/client";

export const FIND_PET = gql`
  query pet($petId: Int!) {
    pet(petId: $petId) {
      petId
      name
    }
  }
`;

export const FIND_USER = gql`
  query ($username: String!) {
    user(username: $username) {
      username
      email
      favoritePets {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      favoritePets {
        petId
        name
        age
        gender
        species
        breed
        country
        state
        city
        zipCode
        linkToPet
        photo
      }
    }
  }
`;
