import type { FindProductVisionDocumentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductVisionDocument from 'src/components/ProductVisionDocument/ProductVisionDocument'

export const QUERY = gql`
  query FindProductVisionDocumentById($id: Int!) {
    productVisionDocument: productVisionDocument(id: $id) {
      id
      productName
      productDescription
      productManager
      mission
      problemCore
      kanbanBoardLink
      wireframeLink
      codebaseLink
      stagedProductUrl
      deployedProductUrl
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProductVisionDocument not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  productVisionDocument,
}: CellSuccessProps<FindProductVisionDocumentById>) => {
  return <ProductVisionDocument productVisionDocument={productVisionDocument} />
}
