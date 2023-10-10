import type { Prisma, Stakeholder } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StakeholderCreateArgs>({
  stakeholder: {
    one: { data: { email: 'String2193226', fullName: 'String' } },
    two: { data: { email: 'String9959631', fullName: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Stakeholder, 'stakeholder'>
