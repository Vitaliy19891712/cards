import * as Tabs from '@radix-ui/react-tabs'
import { ReactNode } from 'react'
import s from './tabs.module.scss'
import { Typography } from '../typography'

export type TabsPropsType = {
  tabs: Array<TabsType>
  value?: string
  onValueChange?: (value: string) => void
  children?: ReactNode
}
type TabsType = {
  disabled?: boolean
  title: string
  value: string
}

export const TabSwitcher: React.FC<TabsPropsType> = ({ tabs, value, onValueChange, children }) => {
  const className = {
    trigger: s.trigger,
    root: s.root,
    list: s.list,
  }

  return (
    <Tabs.Root
      className={className.root}
      defaultValue={tabs[0].value}
      value={value}
      onValueChange={onValueChange}
    >
      <Tabs.List className={className.list}>
        {tabs.map(t => (
          <Tabs.Trigger
            className={className.trigger}
            value={t.value}
            disabled={t.disabled}
            key={t.value}
          >
            <Typography variant={'body1'}>{t.title}</Typography>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}
