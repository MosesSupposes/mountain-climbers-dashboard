import type {
  QueryResolvers,
  MutationResolvers,
  StakeholderRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const stakeholders: QueryResolvers['stakeholders'] = () => {
  return db.stakeholder.findMany()
}

export const stakeholder: QueryResolvers['stakeholder'] = ({ id }) => {
  return db.stakeholder.findUnique({
    where: { id },
  })
}

export const createStakeholder: MutationResolvers['createStakeholder'] = ({
  input,
}) => {
  return db.stakeholder.create({
    data: input,
  })
}

export const updateStakeholder: MutationResolvers['updateStakeholder'] = ({
  id,
  input,
}) => {
  return db.stakeholder.update({
    data: input,
    where: { id },
  })
}

export const deleteStakeholder: MutationResolvers['deleteStakeholder'] = ({
  id,
}) => {
  return db.stakeholder.delete({
    where: { id },
  })
}

export const Stakeholder: StakeholderRelationResolvers = {
  productVisionDocuments: (_obj, { root }) => {
    return db.stakeholder
      .findUnique({ where: { id: root?.id } })
      .productVisionDocuments()
  },
}
