import { ComponentPropsWithoutRef } from 'react'
import { DecksTableRow } from '.'
import { Deck, Paginated } from '../../../services'

type DecksTableBodyPropsType = Omit<
  {
    userId: string | undefined
    data: Paginated<Deck>
  } & ComponentPropsWithoutRef<'tbody'>,
  'children'
>
export const DecksTableBody: React.FC<DecksTableBodyPropsType> = ({
  data,
  userId,
}) => {
  return (
    <tbody>
      {data.items.map(item => (
        <DecksTableRow
          key={item.id}
          item={item}
          userId={userId}
        ></DecksTableRow>
      ))}
    </tbody>
  )
}
