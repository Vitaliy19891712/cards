import type { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '.'

const meta = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Register: Story = {
  args: {},
}
