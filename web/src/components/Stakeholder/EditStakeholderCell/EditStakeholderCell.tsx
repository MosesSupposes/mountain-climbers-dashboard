import type { EditStakeholderById, UpdateStakeholderInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StakeholderForm from 'src/components/Stakeholder/StakeholderForm'

export const QUERY = gql`
  query EditStakeholderById($id: Int!) {
    stakeholder: stakeholder(id: $id) {
      id
      email
      fullName
      organizationName
      phoneNumber
      website
    }
  }
`
const UPDATE_STAKEHOLDER_MUTATION = gql`
  mutation UpdateStakeholderMutation(
    $id: Int!
    $input: UpdateStakeholderInput!
  ) {
    updateStakeholder(id: $id, input: $input) {
      id
      email
      fullName
      organizationName
      phoneNumber
      website
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  stakeholder,
}: CellSuccessProps<EditStakeholderById>) => {
  const [updateStakeholder, { loading, error }] = useMutation(
    UPDATE_STAKEHOLDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Stakeholder updated')
        navigate(routes.stakeholders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStakeholderInput,
    id: EditStakeholderById['stakeholder']['id']
  ) => {
    updateStakeholder({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Stakeholder {stakeholder?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StakeholderForm
          stakeholder={stakeholder}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
