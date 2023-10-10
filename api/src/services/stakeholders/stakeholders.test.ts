import type { Stakeholder } from '@prisma/client'

import {
  stakeholders,
  stakeholder,
  createStakeholder,
  updateStakeholder,
  deleteStakeholder,
} from './stakeholders'
import type { StandardScenario } from './stakeholders.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stakeholders', () => {
  scenario('returns all stakeholders', async (scenario: StandardScenario) => {
    const result = await stakeholders()

    expect(result.length).toEqual(Object.keys(scenario.stakeholder).length)
  })

  scenario(
    'returns a single stakeholder',
    async (scenario: StandardScenario) => {
      const result = await stakeholder({ id: scenario.stakeholder.one.id })

      expect(result).toEqual(scenario.stakeholder.one)
    }
  )

  scenario('creates a stakeholder', async () => {
    const result = await createStakeholder({
      input: { email: 'String9950425', fullName: 'String' },
    })

    expect(result.email).toEqual('String9950425')
    expect(result.fullName).toEqual('String')
  })

  scenario('updates a stakeholder', async (scenario: StandardScenario) => {
    const original = (await stakeholder({
      id: scenario.stakeholder.one.id,
    })) as Stakeholder
    const result = await updateStakeholder({
      id: original.id,
      input: { email: 'String86337842' },
    })

    expect(result.email).toEqual('String86337842')
  })

  scenario('deletes a stakeholder', async (scenario: StandardScenario) => {
    const original = (await deleteStakeholder({
      id: scenario.stakeholder.one.id,
    })) as Stakeholder
    const result = await stakeholder({ id: original.id })

    expect(result).toEqual(null)
  })
})
