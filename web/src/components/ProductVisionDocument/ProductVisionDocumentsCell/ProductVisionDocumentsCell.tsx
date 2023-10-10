import type { FindProductVisionDocuments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductVisionDocuments from 'src/components/ProductVisionDocument/ProductVisionDocuments'

export const QUERY = gql`
  query FindProductVisionDocuments {
    productVisionDocuments {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productVisionDocuments yet. '}
      <Link to={routes.newProductVisionDocument()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  productVisionDocuments,
}: CellSuccessProps<FindProductVisionDocuments>) => {
  return (
    <ProductVisionDocuments productVisionDocuments={productVisionDocuments} />
  )
}
