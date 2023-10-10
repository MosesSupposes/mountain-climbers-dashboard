import EditProductVisionDocumentCell from 'src/components/ProductVisionDocument/EditProductVisionDocumentCell'

type ProductVisionDocumentPageProps = {
  id: number
}

const EditProductVisionDocumentPage = ({
  id,
}: ProductVisionDocumentPageProps) => {
  return <EditProductVisionDocumentCell id={id} />
}

export default EditProductVisionDocumentPage
