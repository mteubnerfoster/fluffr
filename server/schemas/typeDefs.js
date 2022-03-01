const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
  }

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

type Query {
  users: [User]
  user(username: String!): User
}

type Mutation {
  login(username: String!, password: String!): Auth

  addUser(username: String!, email: String!, password: String!): Auth
  addPet(petId: Int!, name: String!, age: String, gender: String,
    species: String,breed: String,country: String,state: String,
    city: String,zipCode: String,linkToPet: String!,photo: String) : Pet

}

`;

module.exports = typeDefs;