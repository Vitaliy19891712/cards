import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from '.'

const meta = {
  title: 'Components/CheckEmail',
  component: CheckEmailForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {
  args: {
    email: 'vitaliy_myrafa@mail.ru',
  },
}
