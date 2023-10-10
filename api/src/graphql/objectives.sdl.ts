export const schema = gql`
  type Objective {
    id: Int!
    description: String!
    pvd: ProductVisionDocument!
    pvdId: Int!
  }

  type Query {
    objectives: [Objective!]! @requireAuth
    objective(id: Int!): Objective @requireAuth
  }

  input CreateObjectiveInput {
    description: String!
    pvdId: Int!
  }

  input UpdateObjectiveInput {
    description: String
    pvdId: Int
  }

  type Mutation {
    createObjective(input: CreateObjectiveInput!): Objective! @requireAuth
    updateObjective(id: Int!, input: UpdateObjectiveInput!): Objective!
      @requireAuth
    deleteObjective(id: Int!): Objective! @requireAuth
  }
`
