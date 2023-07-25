import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'


const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: ['Виталий', 'Сергей'],
      control: { type: 'radio' },
    },
    button: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {
  args: {
    button: true,
  },
}
export const Avatar: Story = {
  args: {
    button: false,
    name: 'Виталий',
  },
}
