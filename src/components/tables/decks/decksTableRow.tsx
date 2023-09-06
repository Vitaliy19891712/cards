import { ComponentPropsWithoutRef } from 'react'
import { DecksTableCell } from './decksTableCell'
import s from './decksTableRow.module.scss'
import { Typography } from '../../ui/typography'
import { Deck } from '../../../services'

type DecksTableRowPropsType = Omit<
  {
    item: Deck
  } & ComponentPropsWithoutRef<'tr'>,
  'children'
>

export const DecksTableRow: React.FC<DecksTableRowPropsType> = ({ item }) => {
  const date = new Date(item.updated)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Месяцы начинаются с 0, поэтому добавляем 1
  const year = date.getFullYear()
  const formattedDate = `${day}.${month}.${year}`
  return (
    <tr key={item.id} className={s.row}>
      <DecksTableCell>
        <Typography variant={'body2'}></Typography>

        {item.name}
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.cardsCount}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{formattedDate}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.author.name}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>icons...</Typography>
      </DecksTableCell>
    </tr>
  )
}
