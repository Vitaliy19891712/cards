import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from '.'

const meta = {
  title: 'Components/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileEdit: Story = {
  args: {
    email: 'vitaliy_myrafa@mail.ru',
    name: 'Vitaliy',
  },
}
