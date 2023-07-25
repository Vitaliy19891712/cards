import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'
import { EyeOutline, SearchOutline } from '../../../assets/icons'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    iconEnd: {
      options: [<EyeOutline />, ''],
      control: { type: 'radio' },
    },
    iconStart: {
      options: [<SearchOutline />, ''],
      control: { type: 'radio' },
    },
    label: {
      options: ['Label', ''],
      control: { type: 'radio' },
    },
    search: {
      options: [true, false],
      control: { type: 'radio' },
    },
    error: {
      options: ['error', ''],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {
  args: {
    iconEnd: <EyeOutline />,
    iconStart: <SearchOutline />,
    search: true,
    label: 'Label',
    value: 'input',
    onClearClick: () => {},
  },
}
export const Error: Story = {
  args: {
    iconEnd: <EyeOutline />,
    iconStart: <SearchOutline />,
    search: true,
    error: 'Error',
    label: 'Label',
    value: 'input',
    onClearClick: () => {},
  },
}
