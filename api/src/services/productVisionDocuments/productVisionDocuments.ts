import type {
  QueryResolvers,
  MutationResolvers,
  ProductVisionDocumentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const productVisionDocuments: QueryResolvers['productVisionDocuments'] =
  () => {
    return db.productVisionDocument.findMany()
  }

export const productVisionDocument: QueryResolvers['productVisionDocument'] = ({
  id,
}) => {
  return db.productVisionDocument.findUnique({
    where: { id },
  })
}

export const createProductVisionDocument: MutationResolvers['createProductVisionDocument'] =
  ({ input }) => {
    return db.productVisionDocument.create({
      data: input,
    })
  }

export const updateProductVisionDocument: MutationResolvers['updateProductVisionDocument'] =
  ({ id, input }) => {
    return db.productVisionDocument.update({
      data: input,
      where: { id },
    })
  }

export const deleteProductVisionDocument: MutationResolvers['deleteProductVisionDocument'] =
  ({ id }) => {
    return db.productVisionDocument.delete({
      where: { id },
    })
  }

export const ProductVisionDocument: ProductVisionDocumentRelationResolvers = {
  stakeholders: (_obj, { root }) => {
    return db.productVisionDocument
      .findUnique({ where: { id: root?.id } })
      .stakeholders()
  },
  problemSideEffects: (_obj, { root }) => {
    return db.productVisionDocument
      .findUnique({ where: { id: root?.id } })
      .problemSideEffects()
  },
  objectives: (_obj, { root }) => {
    return db.productVisionDocument
      .findUnique({ where: { id: root?.id } })
      .objectives()
  },
}
