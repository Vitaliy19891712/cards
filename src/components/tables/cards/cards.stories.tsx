import type { StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CardsTable, CardsTableBody, CardsTableHeader, Column, Sort } from '.'
import { useDeleteCardMutation, useUpdateCardMutation } from '../../../services'

const meta = {
  title: 'Table/Decks Table',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const data = {
  pagination: {
    totalPages: 1,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2,
  },
  items: [
    {
      id: 'clmqmzc2e0losvo2q4a2q0bv6',
      question: 'l;k',
      answer: '154',
      deckId: 'clmqmv0ut0locvo2q80l2swmu',
      questionImg: null,
      answerImg: null,
      questionVideo: null,
      answerVideo: null,
      created: '2023-09-19T18:16:18.132Z',
      updated: '2023-09-19T18:16:18.132Z',
      shots: 0,
      grade: 0,
      userId: 'c7284361-4b61-4fd4-8832-b2b6a805ddf3',
    },
    {
      id: 'clmqmvnzg0loevo2qp6v15m0x',
      question: 'sd2342',
      answer: 'rwe234',
      deckId: 'clmqmv0ut0locvo2q80l2swmu',
      questionImg: null,
      answerImg: null,
      questionVideo: null,
      answerVideo: null,
      created: '2023-09-19T18:13:26.953Z',
      updated: '2023-09-19T18:13:26.953Z',
      shots: 0,
      grade: 2,
      userId: 'c7284361-4b61-4fd4-8832-b2b6a805ddf3',
    },
  ],
}

export const WithSort: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(undefined)
    const [deleteCard] = useDeleteCardMutation()
    const [updateCard] = useUpdateCardMutation()
    const columns: Array<Column> = [
      {
        key: 'title',
        title: 'Name',
        isSortable: true,
      },
      {
        key: 'cardsCount',
        isSortable: true,
        title: 'Cards',
      },
      {
        key: 'updated',
        isSortable: true,
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        isSortable: true,
        title: 'Created by',
      },
      {
        key: 'options',
        isSortable: false,
        title: '',
      },
    ]

    return (
      <CardsTable>
        <CardsTableHeader columns={columns} onSort={setSort} sort={sort}></CardsTableHeader>
        <CardsTableBody
          deleteCard={id => deleteCard({ id })}
          updateCard={updateCard}
          data={data}
          userId={'userId'}
        ></CardsTableBody>
      </CardsTable>
    )
  },
}
