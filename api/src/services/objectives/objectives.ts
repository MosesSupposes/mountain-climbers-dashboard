import type {
  QueryResolvers,
  MutationResolvers,
  ObjectiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const objectives: QueryResolvers['objectives'] = () => {
  return db.objective.findMany()
}

export const objective: QueryResolvers['objective'] = ({ id }) => {
  return db.objective.findUnique({
    where: { id },
  })
}

export const createObjective: MutationResolvers['createObjective'] = ({
  input,
}) => {
  return db.objective.create({
    data: input,
  })
}

export const updateObjective: MutationResolvers['updateObjective'] = ({
  id,
  input,
}) => {
  return db.objective.update({
    data: input,
    where: { id },
  })
}

export const deleteObjective: MutationResolvers['deleteObjective'] = ({
  id,
}) => {
  return db.objective.delete({
    where: { id },
  })
}

export const Objective: ObjectiveRelationResolvers = {
  pvd: (_obj, { root }) => {
    return db.objective.findUnique({ where: { id: root?.id } }).pvd()
  },
}
