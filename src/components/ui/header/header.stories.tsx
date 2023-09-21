import type { Meta } from '@storybook/react'

import { Header } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    userInfo: {
      options: [
        {
          email: 'vitaliy@murafa.ru',
          name: 'vitaliy',
          id: 'fghfghfghgfhfgh',
          isEmailVerified: true,
          avatar: null,
          dreated: '15 декабря',
          update: '15 декабря',
        },
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
// type Story = StoryObj<typeof meta>

// export const Button: Story = {
//   args: {
//     button: true,
//   },
// }
// export const Avatar: Story = {
//   args: {
//     button: false,
//     name: 'Виталий',
//   },
// }
