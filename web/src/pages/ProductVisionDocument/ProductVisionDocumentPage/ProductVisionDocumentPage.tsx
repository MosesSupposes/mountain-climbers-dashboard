import ProductVisionDocumentCell from 'src/components/ProductVisionDocument/ProductVisionDocumentCell'

type ProductVisionDocumentPageProps = {
  id: number
}

const ProductVisionDocumentPage = ({ id }: ProductVisionDocumentPageProps) => {
  return <ProductVisionDocumentCell id={id} />
}

export default ProductVisionDocumentPage
