export const schema = gql`
  type ProblemSideEffect {
    id: Int!
    description: String!
    pvd: ProductVisionDocument!
    pvdId: Int!
  }

  type Query {
    problemSideEffects: [ProblemSideEffect!]! @requireAuth
    problemSideEffect(id: Int!): ProblemSideEffect @requireAuth
  }

  input CreateProblemSideEffectInput {
    description: String!
    pvdId: Int!
  }

  input UpdateProblemSideEffectInput {
    description: String
    pvdId: Int
  }

  type Mutation {
    createProblemSideEffect(
      input: CreateProblemSideEffectInput!
    ): ProblemSideEffect! @requireAuth
    updateProblemSideEffect(
      id: Int!
      input: UpdateProblemSideEffectInput!
    ): ProblemSideEffect! @requireAuth
    deleteProblemSideEffect(id: Int!): ProblemSideEffect! @requireAuth
  }
`
