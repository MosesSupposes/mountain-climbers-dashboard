// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Stakeholders" titleTo="stakeholders" buttonLabel="New Stakeholder" buttonTo="newStakeholder">
        <Route path="/stakeholders/new" page={StakeholderNewStakeholderPage} name="newStakeholder" />
        <Route path="/stakeholders/{id:Int}/edit" page={StakeholderEditStakeholderPage} name="editStakeholder" />
        <Route path="/stakeholders/{id:Int}" page={StakeholderStakeholderPage} name="stakeholder" />
        <Route path="/stakeholders" page={StakeholderStakeholdersPage} name="stakeholders" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProductVisionDocuments" titleTo="productVisionDocuments" buttonLabel="New ProductVisionDocument" buttonTo="newProductVisionDocument">
        <Route path="/product-vision-documents/new" page={ProductVisionDocumentNewProductVisionDocumentPage} name="newProductVisionDocument" />
        <Route path="/product-vision-documents/{id:Int}/edit" page={ProductVisionDocumentEditProductVisionDocumentPage} name="editProductVisionDocument" />
        <Route path="/product-vision-documents/{id:Int}" page={ProductVisionDocumentProductVisionDocumentPage} name="productVisionDocument" />
        <Route path="/product-vision-documents" page={ProductVisionDocumentProductVisionDocumentsPage} name="productVisionDocuments" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
