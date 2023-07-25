import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '.'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      {
        title: 'string',
        value: 'string',
      },
      {
        title: 'value',
        value: 'value',
      },
      {
        title: 'value1',
        value: 'value1',
      },
    ],
  },
}
export const Disabled: Story = {
  args: {
    tabs: [
      {
        title: 'string',
        value: 'string',
        disabled: true,
      },
      {
        title: 'value',
        value: 'value',
        disabled: true,
      },
      {
        title: 'value1',
        value: 'value1',
        disabled: true,
      },
    ],
  },
}
