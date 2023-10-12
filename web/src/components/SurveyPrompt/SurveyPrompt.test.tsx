import { render, screen, fireEvent, waitFor } from '@redwoodjs/testing/web'

import SurveyPrompt from './SurveyPrompt'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SurveyPrompt', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SurveyPrompt
          question="What is the core problem you are trying to solve with this product?"
          hints={[
            'This is the core problem that causes all the problem symptoms.',
            'Your response should be clear and illustrate the source of the pain.',
            'Note: Lack of a solution is not a problem',
          ]}
          saveResponse={console.log}
        />
      )
    }).not.toThrow()
  })
  it('executes the callback intended to save the response', async () => {
    render(
      <SurveyPrompt
        question="What is 1 + 1?"
        hints={[
          'This is not a trick question.',
          'The answer is not eleven',
          'There is no polarity...', // (one man plus one woman equals the trinity)
        ]}
        saveResponse={(response) => {
          let responseAsHtml = new HTMLParagraphElement()
          responseAsHtml.textContent = response
          document.appendChild(responseAsHtml)
        }}
      />
    )

    const input = screen.getByPlaceholderText('Enter your response here...')
    const submitButton = screen.getByText('Submit')

    fireEvent.change(input, { target: { value: '2' } })
    fireEvent.click(submitButton)
    fireEvent.reset(input)
    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
