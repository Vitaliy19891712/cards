import { ComponentPropsWithoutRef } from 'react'
import { DecksTableCell } from './decksTableCell'
import s from './decksTableRow.module.scss'
import { Typography } from '../../ui/typography'

export type Item = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
}
type DecksTableRowPropsType = Omit<
  {
    item: Item
  } & ComponentPropsWithoutRef<'tr'>,
  'children'
>
export const DecksTableRow: React.FC<DecksTableRowPropsType> = ({ item }) => {
  return (
    <tr key={item.title} className={s.row}>
      <DecksTableCell>
        <Typography variant={'body2'}></Typography>

        {item.title}
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.cardsCount}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.updated}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.createdBy}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>icons...</Typography>
      </DecksTableCell>
    </tr>
  )
}
