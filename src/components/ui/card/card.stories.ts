import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Card1: Story = {
  args: { title: 'Forgot your password?', children: 'Content' },
}
