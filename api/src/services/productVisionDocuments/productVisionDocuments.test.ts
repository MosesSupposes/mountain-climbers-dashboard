import type { ProductVisionDocument } from '@prisma/client'

import {
  productVisionDocuments,
  productVisionDocument,
  createProductVisionDocument,
  updateProductVisionDocument,
  deleteProductVisionDocument,
} from './productVisionDocuments'
import type { StandardScenario } from './productVisionDocuments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productVisionDocuments', () => {
  scenario(
    'returns all productVisionDocuments',
    async (scenario: StandardScenario) => {
      const result = await productVisionDocuments()

      expect(result.length).toEqual(
        Object.keys(scenario.productVisionDocument).length
      )
    }
  )

  scenario(
    'returns a single productVisionDocument',
    async (scenario: StandardScenario) => {
      const result = await productVisionDocument({
        id: scenario.productVisionDocument.one.id,
      })

      expect(result).toEqual(scenario.productVisionDocument.one)
    }
  )

  scenario('creates a productVisionDocument', async () => {
    const result = await createProductVisionDocument({
      input: {
        productName: 'String',
        productDescription: 'String',
        mission: 'String',
        problemCore: 'String',
        updatedAt: '2023-10-10T17:11:35.204Z',
      },
    })

    expect(result.productName).toEqual('String')
    expect(result.productDescription).toEqual('String')
    expect(result.mission).toEqual('String')
    expect(result.problemCore).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-10-10T17:11:35.204Z'))
  })

  scenario(
    'updates a productVisionDocument',
    async (scenario: StandardScenario) => {
      const original = (await productVisionDocument({
        id: scenario.productVisionDocument.one.id,
      })) as ProductVisionDocument
      const result = await updateProductVisionDocument({
        id: original.id,
        input: { productName: 'String2' },
      })

      expect(result.productName).toEqual('String2')
    }
  )

  scenario(
    'deletes a productVisionDocument',
    async (scenario: StandardScenario) => {
      const original = (await deleteProductVisionDocument({
        id: scenario.productVisionDocument.one.id,
      })) as ProductVisionDocument
      const result = await productVisionDocument({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
