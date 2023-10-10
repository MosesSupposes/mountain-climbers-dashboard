import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Stakeholder/StakeholdersCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteStakeholderMutationVariables,
  FindStakeholders,
} from 'types/graphql'

const DELETE_STAKEHOLDER_MUTATION = gql`
  mutation DeleteStakeholderMutation($id: Int!) {
    deleteStakeholder(id: $id) {
      id
    }
  }
`

const StakeholdersList = ({ stakeholders }: FindStakeholders) => {
  const [deleteStakeholder] = useMutation(DELETE_STAKEHOLDER_MUTATION, {
    onCompleted: () => {
      toast.success('Stakeholder deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteStakeholderMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stakeholder ' + id + '?')) {
      deleteStakeholder({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Full name</th>
            <th>Organization name</th>
            <th>Phone number</th>
            <th>Website</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((stakeholder) => (
            <tr key={stakeholder.id}>
              <td>{truncate(stakeholder.id)}</td>
              <td>{truncate(stakeholder.email)}</td>
              <td>{truncate(stakeholder.fullName)}</td>
              <td>{truncate(stakeholder.organizationName)}</td>
              <td>{truncate(stakeholder.phoneNumber)}</td>
              <td>{truncate(stakeholder.website)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stakeholder({ id: stakeholder.id })}
                    title={'Show stakeholder ' + stakeholder.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStakeholder({ id: stakeholder.id })}
                    title={'Edit stakeholder ' + stakeholder.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete stakeholder ' + stakeholder.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stakeholder.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StakeholdersList
