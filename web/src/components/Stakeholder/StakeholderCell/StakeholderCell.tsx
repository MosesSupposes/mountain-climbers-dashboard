import type { FindStakeholderById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Stakeholder from 'src/components/Stakeholder/Stakeholder'

export const QUERY = gql`
  query FindStakeholderById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stakeholder not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  stakeholder,
}: CellSuccessProps<FindStakeholderById>) => {
  return <Stakeholder stakeholder={stakeholder} />
}
