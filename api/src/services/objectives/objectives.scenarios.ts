import type { Prisma, Objective } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ObjectiveCreateArgs>({
  objective: {
    one: {
      data: {
        description: 'String',
        pvd: {
          create: {
            productName: 'String',
            productDescription: 'String',
            mission: 'String',
            problemCore: 'String',
            updatedAt: '2023-10-10T17:17:04.275Z',
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
            updatedAt: '2023-10-10T17:17:04.275Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Objective, 'objective'>
