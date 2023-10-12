// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import SurveyPrompt from './SurveyPrompt'

const meta: Meta<typeof SurveyPrompt> = {
  component: SurveyPrompt,
}

export default meta

type Story = StoryObj<typeof SurveyPrompt>

export const Primary: Story = {
  args: {
    question:
      'What is the core problem you are trying to solve with this product?',
    hints: [
      'This is the core problem that causes all the problem symptoms.',
      'Your response should be clear and illustrate the source of the pain.',
      'Note: Lack of a solution is not a problem',
    ],
    saveResponse: (response) =>
      console.log('Testing, testing, 1... 2... 3... ' + response),
  },
}
