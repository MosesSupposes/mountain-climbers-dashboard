import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StakeholderForm from 'src/components/Stakeholder/StakeholderForm'

import type { CreateStakeholderInput } from 'types/graphql'

const CREATE_STAKEHOLDER_MUTATION = gql`
  mutation CreateStakeholderMutation($input: CreateStakeholderInput!) {
    createStakeholder(input: $input) {
      id
    }
  }
`

const NewStakeholder = () => {
  const [createStakeholder, { loading, error }] = useMutation(
    CREATE_STAKEHOLDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Stakeholder created')
        navigate(routes.stakeholders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStakeholderInput) => {
    createStakeholder({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Stakeholder</h2>
      </header>
      <div className="rw-segment-main">
        <StakeholderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStakeholder
