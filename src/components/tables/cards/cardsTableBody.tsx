import { ComponentPropsWithoutRef } from 'react'
import { CardsTableRow } from '.'
import { Paginated } from '../../../services'
import { Card, UpdateCardParams } from '../../../services/cards'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'

type CardsTableBodyPropsType = Omit<
  {
    userId: string | undefined
    deleteCard: (id: string) => Promise<{ data: void } | { error: FetchBaseQueryError | SerializedError }>
    updateCard: ({
      answer,
      question,
    }: UpdateCardParams) => Promise<{ data: Card } | { error: FetchBaseQueryError | SerializedError }>
    data: Omit<Paginated<Card>, 'maxCardsCount'>
  } & ComponentPropsWithoutRef<'tbody'>,
  'children'
>
export const CardsTableBody: React.FC<CardsTableBodyPropsType> = ({ data, userId, updateCard, deleteCard }) => {
  return (
    <tbody>
      {data.items.map(item => (
        <CardsTableRow
          userId={userId}
          updateCard={updateCard}
          deleteCard={deleteCard}
          key={item.id}
          item={item}
        ></CardsTableRow>
      ))}
    </tbody>
  )
}
