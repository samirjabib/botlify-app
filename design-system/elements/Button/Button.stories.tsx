import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    intent: 'primary',
  },
  render: (args) => (
    <div>
      <Button {...args}>View Docs</Button>
    </div>
  ),
}

export const secondary: Story = {
  args: {
    intent: 'secondary',
  },
  render: (args) => (
    <div>
      <Button {...args}>View Docs</Button>
    </div>
  ),
}

export const tertiary: Story = {
  args: {
    intent: 'tertiary',
  },
  render: (args) => (
    <div>
      <Button {...args}>View Docs</Button>
    </div>
  ),