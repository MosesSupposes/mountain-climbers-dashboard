import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteStakeholderMutationVariables,
  FindStakeholderById,
} from 'types/graphql'

const DELETE_STAKEHOLDER_MUTATION = gql`
  mutation DeleteStakeholderMutation($id: Int!) {
    deleteStakeholder(id: $id) {
      id
    }
  }
`

interface Props {
  stakeholder: NonNullable<FindStakeholderById['stakeholder']>
}

const Stakeholder = ({ stakeholder }: Props) => {
  const [deleteStakeholder] = useMutation(DELETE_STAKEHOLDER_MUTATION, {
    onCompleted: () => {
      toast.success('Stakeholder deleted')
      navigate(routes.stakeholders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStakeholderMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stakeholder ' + id + '?')) {
      deleteStakeholder({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Stakeholder {stakeholder.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{stakeholder.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{stakeholder.email}</td>
            </tr>
            <tr>
              <th>Full name</th>
              <td>{stakeholder.fullName}</td>
            </tr>
            <tr>
              <th>Organization name</th>
              <td>{stakeholder.organizationName}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{stakeholder.phoneNumber}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{stakeholder.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStakeholder({ id: stakeholder.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(stakeholder.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Stakeholder
