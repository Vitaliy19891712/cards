import type { StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Sort, Column, TableHeader } from '.'

const meta = {
  title: 'Table/Decks Table',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

// export const Card1: Story = {
//   args: { },
// }
const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const WithSort: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

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
      <table>
        <TableHeader columns={columns} onSort={setSort} sort={sort}></TableHeader>
        <tbody>
          {data.map(item => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.cardsCount}</td>
              <td>{item.updated}</td>
              <td>{item.createdBy}</td>
              <td>icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}
