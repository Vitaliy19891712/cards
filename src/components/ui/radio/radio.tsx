import { ComponentProps } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import s from './radio.module.scss'
import { Typography } from '../typography'

type ItemsType = {
  title: string
}

export type RadioProps = {
  items: Array<ItemsType>
  disabled?: boolean
  onChange: (value: string) => void
}

export const Radio: React.FC<RadioProps> = ({ items, disabled, onChange }) => {
  return (
    <RadioGroup.Root className={s.root} onValueChange={onChange}>
      {items.map(i => {
        return (
          <div className={s.wrapperItem} aria-disabled={disabled}>
            <RadioGroup.Item id={i.title} value={i.title} className={s.item} disabled={disabled}>
              <RadioGroup.Indicator className={s.indicator} />
            </RadioGroup.Item>
            <label className={s.label} htmlFor={i.title}>
              <Typography variant={'body2'}>{i.title}</Typography>
            </label>
          </div>
        )
      })}
    </RadioGroup.Root>
  )
}
