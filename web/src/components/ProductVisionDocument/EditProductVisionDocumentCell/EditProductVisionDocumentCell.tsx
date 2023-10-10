import type {
  EditProductVisionDocumentById,
  UpdateProductVisionDocumentInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductVisionDocumentForm from 'src/components/ProductVisionDocument/ProductVisionDocumentForm'

export const QUERY = gql`
  query EditProductVisionDocumentById($id: Int!) {
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
const UPDATE_PRODUCT_VISION_DOCUMENT_MUTATION = gql`
  mutation UpdateProductVisionDocumentMutation(
    $id: Int!
    $input: UpdateProductVisionDocumentInput!
  ) {
    updateProductVisionDocument(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  productVisionDocument,
}: CellSuccessProps<EditProductVisionDocumentById>) => {
  const [updateProductVisionDocument, { loading, error }] = useMutation(
    UPDATE_PRODUCT_VISION_DOCUMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductVisionDocument updated')
        navigate(routes.productVisionDocuments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProductVisionDocumentInput,
    id: EditProductVisionDocumentById['productVisionDocument']['id']
  ) => {
    updateProductVisionDocument({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductVisionDocument {productVisionDocument?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductVisionDocumentForm
          productVisionDocument={productVisionDocument}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
