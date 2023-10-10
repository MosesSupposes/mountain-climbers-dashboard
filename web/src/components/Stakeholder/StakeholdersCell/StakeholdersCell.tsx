import type { FindStakeholders } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Stakeholders from 'src/components/Stakeholder/Stakeholders'

export const QUERY = gql`
  query FindStakeholders {
    stakeholders {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stakeholders yet. '}
      <Link to={routes.newStakeholder()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  stakeholders,
}: CellSuccessProps<FindStakeholders>) => {
  return <Stakeholders stakeholders={stakeholders} />
}
