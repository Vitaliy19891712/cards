import { ComponentPropsWithoutRef } from 'react'
import { DecksTableRow } from '.'
import { CreateDeck, Deck, Paginated } from '../../../services'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'

type DecksTableBodyPropsType = Omit<
  {
    userId: string | undefined
    data: Paginated<Deck>
    deleteDeck: (
      id: string 
    ) => Promise<
      { data: Omit<Deck, 'author' | 'isDeleted' | 'isBlocked'> } | { error: FetchBaseQueryError | SerializedError }
    >
    updateDeck: ({
      name,
      cover,
      isPrivate,
      id,
    }: CreateDeck & Pick<Deck, 'id'>) => Promise<{ data: Deck } | { error: FetchBaseQueryError | SerializedError }>
  } & ComponentPropsWithoutRef<'tbody'>,
  'children'
>
export const DecksTableBody: React.FC<DecksTableBodyPropsType> = ({ data, userId, deleteDeck, updateDeck }) => {
  return (
    <tbody>
      {data.items.map(item => (
        <DecksTableRow
          updateDeck={updateDeck}
          key={item.id}
          item={item}
          userId={userId}
          deleteDeck={deleteDeck}
        ></DecksTableRow>
      ))}
    </tbody>
  )
}
