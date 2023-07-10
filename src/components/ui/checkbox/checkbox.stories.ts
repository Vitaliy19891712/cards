import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      options: ['with label', ' '],
      control: { type: 'radio' },
    },
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabelChecked: Story = {
  args: {
    label: ' check me',
    checked: true,
  },
}
export const WithoutLabelChecked: Story = {
  args: {
    checked: true,
  },
}
export const WithLabelUnchecked: Story = {
  args: {
    label: ' check me',
    checked: false,
  },
}
export const WithoutLabelUnchecked: Story = {
  args: {
    checked: false,
  },
}
export const WithLabelUncheckedDisabled: Story = {
  args: {
    label: ' check me',
    checked: false,
    disabled: true,
  },
}
export const WithoutLabelUncheckedDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
