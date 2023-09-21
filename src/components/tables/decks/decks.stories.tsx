import type { StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Column, DecksTable, DecksTableBody, DecksTableHeader, Sort } from '.'
import { useDeleteDeckMutation, useUpdateDeckMutation } from '../../../services'

const meta = {
  title: 'Table/Decks Table',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

const data = {
  maxCardsCount: 22,
  pagination: {
    totalPages: 96,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 955,
  },
  items: [
    {
      id: 'clmtii1tv0mksvo2qxuw45re2',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: 'NewNewNew',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T18:34:11.779Z',
      updated: '2023-09-21T18:34:11.779Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmtig5c40mknvo2q6zrkjgbu',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: 'NewNewNew',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T18:32:43.012Z',
      updated: '2023-09-21T18:32:43.012Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmtifwnn0mkmvo2quk1pewmx',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: 'NewNewNew',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T18:32:31.763Z',
      updated: '2023-09-21T18:32:31.763Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmti6m1t0mjpvo2qxch4oqna',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: 'NewNewNew',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T18:25:18.114Z',
      updated: '2023-09-21T18:25:18.114Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmt4r26j0mbsvo2qrg59pmd1',
      userId: '93e03981-ceaa-4856-82d0-ccf9650d8437',
      name: '5959595',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T12:09:17.515Z',
      updated: '2023-09-21T12:09:17.515Z',
      cardsCount: 0,
      author: {
        id: '93e03981-ceaa-4856-82d0-ccf9650d8437',
        name: 'bnkenny1987',
      },
    },
    {
      id: 'clmsyiphb0m9fvo2qcjhjdby4',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: '123',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T09:14:50.112Z',
      updated: '2023-09-21T09:14:50.112Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmsyblnr0m9cvo2q9i301y9u',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: '123',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T09:09:18.567Z',
      updated: '2023-09-21T09:09:18.567Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmsxvjpx0m93vo2q16rz4j8s',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: '123',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T08:56:49.557Z',
      updated: '2023-09-21T08:56:49.557Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clmsxvipa0m92vo2qankezyvy',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: '123',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-21T08:56:48.238Z',
      updated: '2023-09-21T08:56:48.238Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
    {
      id: 'clms6uw2b0m51vo2qnw2rmc44',
      userId: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
      name: 'awd',
      isPrivate: false,
      shots: 0,
      cover: null,
      rating: 0,
      isDeleted: null,
      isBlocked: null,
      created: '2023-09-20T20:20:29.268Z',
      updated: '2023-09-20T20:20:29.268Z',
      cardsCount: 0,
      author: {
        id: 'f2be95b9-4d07-4751-a775-bd612fc9553a',
        name: 'v1det',
      },
    },
  ],
}

export const WithSort: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(undefined)
    const [deleteDeck] = useDeleteDeckMutation()
    const [updateDeck] = useUpdateDeckMutation()
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
      <DecksTable>
        <DecksTableHeader columns={columns} onSort={setSort} sort={sort}></DecksTableHeader>
        <DecksTableBody
          updateDeck={updateDeck}
          deleteDeck={id => deleteDeck(id)}
          data={data}
          userId={'userId'}
        ></DecksTableBody>
      </DecksTable>
    )
  },
}
