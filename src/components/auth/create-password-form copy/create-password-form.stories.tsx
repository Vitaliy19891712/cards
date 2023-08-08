import type { Meta, StoryObj } from '@storybook/react'

import { CreatePasswordForm } from '.'

const meta = {
  title: 'Components/CreatePasswordForm',
  component: CreatePasswordForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreatePasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePassword: Story = {
  args: {},
}
