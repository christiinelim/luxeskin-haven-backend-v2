const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    image: String
    first_name: String
    last_name: String
    contact: String
    address: String
    verified: String
  }

  input CreateUserInput {
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    contact: String
    address: String
  }
`;


module.exports = typeDefs;