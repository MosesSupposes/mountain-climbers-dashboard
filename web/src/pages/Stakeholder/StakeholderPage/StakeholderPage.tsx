import StakeholderCell from 'src/components/Stakeholder/StakeholderCell'

type StakeholderPageProps = {
  id: number
}

const StakeholderPage = ({ id }: StakeholderPageProps) => {
  return <StakeholderCell id={id} />
}

export default StakeholderPage
