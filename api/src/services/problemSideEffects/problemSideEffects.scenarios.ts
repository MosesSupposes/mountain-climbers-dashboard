import type { Prisma, ProblemSideEffect } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProblemSideEffectCreateArgs>({
  problemSideEffect: {
    one: {
      data: {
        description: 'String',
        pvd: {
          create: {
            productName: 'String',
            productDescription: 'String',
            mission: 'String',
            problemCore: 'String',
            updatedAt: '2023-10-10T17:16:35.938Z',
          },
        },
      },
    },
    two: {
      data: {
        description: 'String',
        pvd: {
          create: {
            productName: 'String',
            productDescription: 'String',
            mission: 'String',
            problemCore: 'String',
            updatedAt: '2023-10-10T17:16:35.938Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProblemSideEffect,
  'problemSideEffect'
>
