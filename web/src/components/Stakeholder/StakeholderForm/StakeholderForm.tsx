import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditStakeholderById, UpdateStakeholderInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStakeholder = NonNullable<EditStakeholderById['stakeholder']>

interface StakeholderFormProps {
  stakeholder?: EditStakeholderById['stakeholder']
  onSave: (data: UpdateStakeholderInput, id?: FormStakeholder['id']) => void
  error: RWGqlError
  loading: boolean
}

const StakeholderForm = (props: StakeholderFormProps) => {
  const onSubmit = (data: FormStakeholder) => {
    props.onSave(data, props?.stakeholder?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStakeholder> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.stakeholder?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="fullName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full name
        </Label>

        <TextField
          name="fullName"
          defaultValue={props.stakeholder?.fullName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fullName" className="rw-field-error" />

        <Label
          name="organizationName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Organization name
        </Label>

        <TextField
          name="organizationName"
          defaultValue={props.stakeholder?.organizationName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="organizationName" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.stakeholder?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="website"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website
        </Label>

        <TextField
          name="website"
          defaultValue={props.stakeholder?.website}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="website" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StakeholderForm
