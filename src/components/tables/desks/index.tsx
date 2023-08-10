import { ComponentPropsWithoutRef } from 'react'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null
export type Column = {
  key: string
  title: string
  isSortable: boolean
}
type TableHeaderPropsType = Omit<
  {
    columns: Array<Column>
    onSort: (sort: Sort) => void
    sort: Sort
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>
export const TableHeader: React.FC<TableHeaderPropsType> = ({ columns, onSort, sort }) => {
  const handleSort = (key: string, isSortable: boolean) => () => {
    if (!isSortable) return

    if (key !== sort?.key) {
      return onSort({
        key,
        direction: 'asc',
      })
    }
    if (sort.direction === 'asc') {
      return onSort({
        key,
        direction: 'desc',
      })
    }
    onSort(null)
  }
  return (
    <thead>
      <tr>
        {columns.map(c => {
          const showSort = c.isSortable && sort && sort.key === c.key
          return (
            <th key={c.key} onClick={handleSort(c.key, c.isSortable)}>
              {c.title}
              {showSort && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
