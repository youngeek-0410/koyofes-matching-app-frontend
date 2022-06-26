import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import * as stories from './ExampleButton.stories'

const { Default, Disabled } = composeStories(stories)

describe('src/components/atoms/ExampleButton/ExampleButton.test.tsx', () => {
  const options = { name: '送信する' }
  test('[role=button]であること', () => {
    const { getByRole } = render(<Default />)
    expect(getByRole('button', options)).toBeInTheDocument()
  })
  test('[disabled=true]であること', () => {
    const { getByRole } = render(<Disabled />)
    expect(getByRole('button', options)).toBeDisabled()
  })
})
