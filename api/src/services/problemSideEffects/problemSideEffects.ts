import type {
  QueryResolvers,
  MutationResolvers,
  ProblemSideEffectRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const problemSideEffects: QueryResolvers['problemSideEffects'] = () => {
  return db.problemSideEffect.findMany()
}

export const problemSideEffect: QueryResolvers['problemSideEffect'] = ({
  id,
}) => {
  return db.problemSideEffect.findUnique({
    where: { id },
  })
}

export const createProblemSideEffect: MutationResolvers['createProblemSideEffect'] =
  ({ input }) => {
    return db.problemSideEffect.create({
      data: input,
    })
  }

export const updateProblemSideEffect: MutationResolvers['updateProblemSideEffect'] =
  ({ id, input }) => {
    return db.problemSideEffect.update({
      data: input,
      where: { id },
    })
  }

export const deleteProblemSideEffect: MutationResolvers['deleteProblemSideEffect'] =
  ({ id }) => {
    return db.problemSideEffect.delete({
      where: { id },
    })
  }

export const ProblemSideEffect: ProblemSideEffectRelationResolvers = {
  pvd: (_obj, { root }) => {
    return db.problemSideEffect.findUnique({ where: { id: root?.id } }).pvd()
  },
}
