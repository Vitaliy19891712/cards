import { ComponentPropsWithoutRef } from 'react'
import { DecksTableCell } from './decksTableCell'
import s from './decksTableRow.module.scss'
import { Typography } from '../../ui/typography'
import { Deck } from '../../../services'
import { Delete, EditIcon, Play } from '../../../assets/icons'

type DecksTableRowPropsType = Omit<
  {
    userId: string | undefined
    item: Deck
  } & ComponentPropsWithoutRef<'tr'>,
  'children'
>

export const DecksTableRow: React.FC<DecksTableRowPropsType> = ({ item, userId }) => {
  const date = new Date(item.updated)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const formattedDate = `${day}.${month}.${year}`
  const icons = (
    <>
      <Play />
      <Delete />
      {userId === item.author.id && <EditIcon />}
    </>
  )

  return (
    <tr key={item.id} className={s.row}>
      <DecksTableCell>
        <Typography variant={'body2'} as={'a'} href={`/cards/${item.id}`}>
          {item.name}
        </Typography>
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
      <DecksTableCell className={s.icons}>{icons}</DecksTableCell>
    </tr>
  )
}
