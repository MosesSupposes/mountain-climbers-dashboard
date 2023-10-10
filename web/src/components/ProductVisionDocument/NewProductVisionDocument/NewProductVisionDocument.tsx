import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductVisionDocumentForm from 'src/components/ProductVisionDocument/ProductVisionDocumentForm'

import type { CreateProductVisionDocumentInput } from 'types/graphql'

const CREATE_PRODUCT_VISION_DOCUMENT_MUTATION = gql`
  mutation CreateProductVisionDocumentMutation(
    $input: CreateProductVisionDocumentInput!
  ) {
    createProductVisionDocument(input: $input) {
      id
    }
  }
`

const NewProductVisionDocument = () => {
  const [createProductVisionDocument, { loading, error }] = useMutation(
    CREATE_PRODUCT_VISION_DOCUMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductVisionDocument created')
        navigate(routes.productVisionDocuments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProductVisionDocumentInput) => {
    createProductVisionDocument({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProductVisionDocument
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductVisionDocumentForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewProductVisionDocument
