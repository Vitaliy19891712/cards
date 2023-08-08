import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '.'

const meta = {
  title: 'Components/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Check: Story = {
  args: {
    email: 'vitaliy_myrafa@mail.ru',
  },
}
