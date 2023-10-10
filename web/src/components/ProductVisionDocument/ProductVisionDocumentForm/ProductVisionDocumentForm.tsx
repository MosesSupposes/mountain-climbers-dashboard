import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditProductVisionDocumentById,
  UpdateProductVisionDocumentInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormProductVisionDocument = NonNullable<
  EditProductVisionDocumentById['productVisionDocument']
>

interface ProductVisionDocumentFormProps {
  productVisionDocument?: EditProductVisionDocumentById['productVisionDocument']
  onSave: (
    data: UpdateProductVisionDocumentInput,
    id?: FormProductVisionDocument['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ProductVisionDocumentForm = (props: ProductVisionDocumentFormProps) => {
  const onSubmit = (data: FormProductVisionDocument) => {
    props.onSave(data, props?.productVisionDocument?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProductVisionDocument> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="productName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product name
        </Label>

        <TextField
          name="productName"
          defaultValue={props.productVisionDocument?.productName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productName" className="rw-field-error" />

        <Label
          name="productDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product description
        </Label>

        <TextField
          name="productDescription"
          defaultValue={props.productVisionDocument?.productDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productDescription" className="rw-field-error" />

        <Label
          name="productManager"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product manager
        </Label>

        <TextField
          name="productManager"
          defaultValue={props.productVisionDocument?.productManager}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productManager" className="rw-field-error" />

        <Label
          name="mission"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mission
        </Label>

        <TextField
          name="mission"
          defaultValue={props.productVisionDocument?.mission}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mission" className="rw-field-error" />

        <Label
          name="problemCore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Problem core
        </Label>

        <TextField
          name="problemCore"
          defaultValue={props.productVisionDocument?.problemCore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="problemCore" className="rw-field-error" />

        <Label
          name="kanbanBoardLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Kanban board link
        </Label>

        <TextField
          name="kanbanBoardLink"
          defaultValue={props.productVisionDocument?.kanbanBoardLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="kanbanBoardLink" className="rw-field-error" />

        <Label
          name="wireframeLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Wireframe link
        </Label>

        <TextField
          name="wireframeLink"
          defaultValue={props.productVisionDocument?.wireframeLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="wireframeLink" className="rw-field-error" />

        <Label
          name="codebaseLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Codebase link
        </Label>

        <TextField
          name="codebaseLink"
          defaultValue={props.productVisionDocument?.codebaseLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="codebaseLink" className="rw-field-error" />

        <Label
          name="stagedProductUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Staged product url
        </Label>

        <TextField
          name="stagedProductUrl"
          defaultValue={props.productVisionDocument?.stagedProductUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="stagedProductUrl" className="rw-field-error" />

        <Label
          name="deployedProductUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deployed product url
        </Label>

        <TextField
          name="deployedProductUrl"
          defaultValue={props.productVisionDocument?.deployedProductUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deployedProductUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductVisionDocumentForm
