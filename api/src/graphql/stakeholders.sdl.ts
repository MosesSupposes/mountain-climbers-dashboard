export const schema = gql`
  type Stakeholder {
    id: Int!
    email: String!
    fullName: String!
    organizationName: String
    phoneNumber: String
    website: String
    productVisionDocuments: [ProductVisionDocument]!
  }

  type Query {
    stakeholders: [Stakeholder!]! @requireAuth
    stakeholder(id: Int!): Stakeholder @requireAuth
  }

  input CreateStakeholderInput {
    email: String!
    fullName: String!
    organizationName: String
    phoneNumber: String
    website: String
  }

  input UpdateStakeholderInput {
    email: String
    fullName: String
    organizationName: String
    phoneNumber: String
    website: String
  }

  type Mutation {
    createStakeholder(input: CreateStakeholderInput!): Stakeholder! @requireAuth
    updateStakeholder(id: Int!, input: UpdateStakeholderInput!): Stakeholder!
      @requireAuth
    deleteStakeholder(id: Int!): Stakeholder! @requireAuth
  }
`
