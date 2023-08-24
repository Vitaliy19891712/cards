import type { Meta, StoryObj } from '@storybook/react'

import { ProfileForm } from '.'

const meta = {
  title: 'Components/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileEdit: Story = {
  args: {
    email: 'vitaliy_myrafa@mail.ru',
    name: 'Vitaliy',
  },
}
