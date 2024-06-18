const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`;

module.exports = typeDefs;
