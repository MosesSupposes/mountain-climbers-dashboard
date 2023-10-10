import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteProductVisionDocumentMutationVariables,
  FindProductVisionDocumentById,
} from 'types/graphql'

const DELETE_PRODUCT_VISION_DOCUMENT_MUTATION = gql`
  mutation DeleteProductVisionDocumentMutation($id: Int!) {
    deleteProductVisionDocument(id: $id) {
      id
    }
  }
`

interface Props {
  productVisionDocument: NonNullable<
    FindProductVisionDocumentById['productVisionDocument']
  >
}

const ProductVisionDocument = ({ productVisionDocument }: Props) => {
  const [deleteProductVisionDocument] = useMutation(
    DELETE_PRODUCT_VISION_DOCUMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductVisionDocument deleted')
        navigate(routes.productVisionDocuments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteProductVisionDocumentMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete productVisionDocument ' + id + '?'
      )
    ) {
      deleteProductVisionDocument({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductVisionDocument {productVisionDocument.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productVisionDocument.id}</td>
            </tr>
            <tr>
              <th>Product name</th>
              <td>{productVisionDocument.productName}</td>
            </tr>
            <tr>
              <th>Product description</th>
              <td>{productVisionDocument.productDescription}</td>
            </tr>
            <tr>
              <th>Product manager</th>
              <td>{productVisionDocument.productManager}</td>
            </tr>
            <tr>
              <th>Mission</th>
              <td>{productVisionDocument.mission}</td>
            </tr>
            <tr>
              <th>Problem core</th>
              <td>{productVisionDocument.problemCore}</td>
            </tr>
            <tr>
              <th>Kanban board link</th>
              <td>{productVisionDocument.kanbanBoardLink}</td>
            </tr>
            <tr>
              <th>Wireframe link</th>
              <td>{productVisionDocument.wireframeLink}</td>
            </tr>
            <tr>
              <th>Codebase link</th>
              <td>{productVisionDocument.codebaseLink}</td>
            </tr>
            <tr>
              <th>Staged product url</th>
              <td>{productVisionDocument.stagedProductUrl}</td>
            </tr>
            <tr>
              <th>Deployed product url</th>
              <td>{productVisionDocument.deployedProductUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(productVisionDocument.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(productVisionDocument.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductVisionDocument({
            id: productVisionDocument.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productVisionDocument.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProductVisionDocument
