import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { ExampleButton } from './ExampleButton'

type T = typeof ExampleButton
type Story = ComponentStoryObj<T>

export default {
  component: ExampleButton,
  args: { children: '送信する' },
} as ComponentMeta<T>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
