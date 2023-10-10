import type { Objective } from '@prisma/client'

import {
  objectives,
  objective,
  createObjective,
  updateObjective,
  deleteObjective,
} from './objectives'
import type { StandardScenario } from './objectives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('objectives', () => {
  scenario('returns all objectives', async (scenario: StandardScenario) => {
    const result = await objectives()

    expect(result.length).toEqual(Object.keys(scenario.objective).length)
  })

  scenario('returns a single objective', async (scenario: StandardScenario) => {
    const result = await objective({ id: scenario.objective.one.id })

    expect(result).toEqual(scenario.objective.one)
  })

  scenario('creates a objective', async (scenario: StandardScenario) => {
    const result = await createObjective({
      input: { description: 'String', pvdId: scenario.objective.two.pvdId },
    })

    expect(result.description).toEqual('String')
    expect(result.pvdId).toEqual(scenario.objective.two.pvdId)
  })

  scenario('updates a objective', async (scenario: StandardScenario) => {
    const original = (await objective({
      id: scenario.objective.one.id,
    })) as Objective
    const result = await updateObjective({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a objective', async (scenario: StandardScenario) => {
    const original = (await deleteObjective({
      id: scenario.objective.one.id,
    })) as Objective
    const result = await objective({ id: original.id })

    expect(result).toEqual(null)
  })
})
