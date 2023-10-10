import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProductVisionDocument/ProductVisionDocumentsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteProductVisionDocumentMutationVariables,
  FindProductVisionDocuments,
} from 'types/graphql'

const DELETE_PRODUCT_VISION_DOCUMENT_MUTATION = gql`
  mutation DeleteProductVisionDocumentMutation($id: Int!) {
    deleteProductVisionDocument(id: $id) {
      id
    }
  }
`

const ProductVisionDocumentsList = ({
  productVisionDocuments,
}: FindProductVisionDocuments) => {
  const [deleteProductVisionDocument] = useMutation(
    DELETE_PRODUCT_VISION_DOCUMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductVisionDocument deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product name</th>
            <th>Product description</th>
            <th>Product manager</th>
            <th>Mission</th>
            <th>Problem core</th>
            <th>Kanban board link</th>
            <th>Wireframe link</th>
            <th>Codebase link</th>
            <th>Staged product url</th>
            <th>Deployed product url</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productVisionDocuments.map((productVisionDocument) => (
            <tr key={productVisionDocument.id}>
              <td>{truncate(productVisionDocument.id)}</td>
              <td>{truncate(productVisionDocument.productName)}</td>
              <td>{truncate(productVisionDocument.productDescription)}</td>
              <td>{truncate(productVisionDocument.productManager)}</td>
              <td>{truncate(productVisionDocument.mission)}</td>
              <td>{truncate(productVisionDocument.problemCore)}</td>
              <td>{truncate(productVisionDocument.kanbanBoardLink)}</td>
              <td>{truncate(productVisionDocument.wireframeLink)}</td>
              <td>{truncate(productVisionDocument.codebaseLink)}</td>
              <td>{truncate(productVisionDocument.stagedProductUrl)}</td>
              <td>{truncate(productVisionDocument.deployedProductUrl)}</td>
              <td>{timeTag(productVisionDocument.createdAt)}</td>
              <td>{timeTag(productVisionDocument.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productVisionDocument({
                      id: productVisionDocument.id,
                    })}
                    title={
                      'Show productVisionDocument ' +
                      productVisionDocument.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductVisionDocument({
                      id: productVisionDocument.id,
                    })}
                    title={
                      'Edit productVisionDocument ' + productVisionDocument.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete productVisionDocument ' + productVisionDocument.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productVisionDocument.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductVisionDocumentsList
