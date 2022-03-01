import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
  
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PET_TO_DB = gql`
mutation addPet(
  $petId: Int!
  $name: String!
  $age: String
  $gender: String
  $species: String
  $breed: String
  $country: String
  $state: String
  $city: String
  $zipCode: String
  $linkToPet: String!
  $photo: String
) {
  addPet(
    petId: $petId
    name: $name
    age: $age
    gender: $gender
    species: $species
    breed: $breed
    country: $country
    state: $state
    city: $city
    zipCode: $zipCode
    linkToPet: $linkToPet
    photo: $photo
  ) {
    petId
    name
    linkToPet
  }
}
`;

export const ADD_PET_TO_USER_FAVE = gql`
mutation addToUserFave($petId: Int!, $username: String!) {
  addToUserFave(petId: $petId, username: $username) {
    favoritePets {
      _id
    }
  }
}

`;