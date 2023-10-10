import type { Prisma, ProductVisionDocument } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductVisionDocumentCreateArgs>({
  productVisionDocument: {
    one: {
      data: {
        productName: 'String',
        productDescription: 'String',
        mission: 'String',
        problemCore: 'String',
        updatedAt: '2023-10-10T17:11:35.214Z',
      },
    },
    two: {
      data: {
        productName: 'String',
        productDescription: 'String',
        mission: 'String',
        problemCore: 'String',
        updatedAt: '2023-10-10T17:11:35.214Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProductVisionDocument,
  'productVisionDocument'
>
