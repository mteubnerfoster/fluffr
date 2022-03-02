const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Auth {
    token: ID!
    user: User
  }

  type Pet {
    _id: ID
    petId: Int
    name: String
    age: String
    gender: String
    species: String
    breed: String
    country: String
    state: String
    city: String
    zipCode: String
    linkToPet: String
    photo: String
  }
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    favoritePets:[Pet]
  }

type Query {
  users: [User]
  user(username: String!): User
  pet(petId: Int!): Pet
  me: User
}

type Mutation {
  login(username: String!, password: String!): Auth

  addUser(username: String!, email: String!, password: String!): Auth
  addPet(petId: Int!, name: String!, age: String, gender: String,
    species: String,breed: String,country: String,state: String,
    city: String,zipCode: String,linkToPet: String!,photo: String) : Pet

  addToUserFave(petId: Int!, username: String!): User

}

`;

module.exports = typeDefs;