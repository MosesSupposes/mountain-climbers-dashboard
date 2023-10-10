import type { ProblemSideEffect } from '@prisma/client'

import {
  problemSideEffects,
  problemSideEffect,
  createProblemSideEffect,
  updateProblemSideEffect,
  deleteProblemSideEffect,
} from './problemSideEffects'
import type { StandardScenario } from './problemSideEffects.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('problemSideEffects', () => {
  scenario(
    'returns all problemSideEffects',
    async (scenario: StandardScenario) => {
      const result = await problemSideEffects()

      expect(result.length).toEqual(
        Object.keys(scenario.problemSideEffect).length
      )
    }
  )

  scenario(
    'returns a single problemSideEffect',
    async (scenario: StandardScenario) => {
      const result = await problemSideEffect({
        id: scenario.problemSideEffect.one.id,
      })

      expect(result).toEqual(scenario.problemSideEffect.one)
    }
  )

  scenario(
    'creates a problemSideEffect',
    async (scenario: StandardScenario) => {
      const result = await createProblemSideEffect({
        input: {
          description: 'String',
          pvdId: scenario.problemSideEffect.two.pvdId,
        },
      })

      expect(result.description).toEqual('String')
      expect(result.pvdId).toEqual(scenario.problemSideEffect.two.pvdId)
    }
  )

  scenario(
    'updates a problemSideEffect',
    async (scenario: StandardScenario) => {
      const original = (await problemSideEffect({
        id: scenario.problemSideEffect.one.id,
      })) as ProblemSideEffect
      const result = await updateProblemSideEffect({
        id: original.id,
        input: { description: 'String2' },
      })

      expect(result.description).toEqual('String2')
    }
  )

  scenario(
    'deletes a problemSideEffect',
    async (scenario: StandardScenario) => {
      const original = (await deleteProblemSideEffect({
        id: scenario.problemSideEffect.one.id,
      })) as ProblemSideEffect
      const result = await problemSideEffect({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
