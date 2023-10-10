export const schema = gql`
  type ProductVisionDocument {
    id: Int!
    stakeholders: [Stakeholder]!
    productName: String!
    productDescription: String!
    productManager: String!
    mission: String!
    problemCore: String!
    problemSideEffects: [ProblemSideEffect]!
    objectives: [Objective]!
    kanbanBoardLink: String
    wireframeLink: String
    codebaseLink: String
    stagedProductUrl: String
    deployedProductUrl: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    productVisionDocuments: [ProductVisionDocument!]! @requireAuth
    productVisionDocument(id: Int!): ProductVisionDocument @requireAuth
  }

  input CreateProductVisionDocumentInput {
    productName: String!
    productDescription: String!
    productManager: String!
    mission: String!
    problemCore: String!
    kanbanBoardLink: String
    wireframeLink: String
    codebaseLink: String
    stagedProductUrl: String
    deployedProductUrl: String
  }

  input UpdateProductVisionDocumentInput {
    productName: String
    productDescription: String
    productManager: String
    mission: String
    problemCore: String
    kanbanBoardLink: String
    wireframeLink: String
    codebaseLink: String
    stagedProductUrl: String
    deployedProductUrl: String
  }

  type Mutation {
    createProductVisionDocument(
      input: CreateProductVisionDocumentInput!
    ): ProductVisionDocument! @requireAuth
    updateProductVisionDocument(
      id: Int!
      input: UpdateProductVisionDocumentInput!
    ): ProductVisionDocument! @requireAuth
    deleteProductVisionDocument(id: Int!): ProductVisionDocument! @requireAuth
  }
`
