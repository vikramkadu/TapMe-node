const typeDefs = `
  type Query {
    getUser(id: String!): User
  }
  type Mutation {
    updateUser(id: String!, coins: Int!): User
  }
  type User {
    id: String!
    coins: Int!
  }
`;

export default typeDefs;
