import EditStakeholderCell from 'src/components/Stakeholder/EditStakeholderCell'

type StakeholderPageProps = {
  id: number
}

const EditStakeholderPage = ({ id }: StakeholderPageProps) => {
  return <EditStakeholderCell id={id} />
}

export default EditStakeholderPage
