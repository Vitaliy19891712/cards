import { ComponentPropsWithoutRef } from 'react'
import s from './decksTableHeader.module.scss'
import { DecksTableCell } from './decksTableCell'
import { Typography } from '../../ui/typography'
export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | undefined
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
export const DecksTableHeader: React.FC<TableHeaderPropsType> = ({ columns, onSort, sort }) => {
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
    onSort(undefined)
  }
  return (
    <thead>
      <tr className={s.header}>
        {columns.map(c => {
          const showSort = c.isSortable && sort && sort.key === c.key
          return (
            <DecksTableCell  as={'th'} key={c.key} onClick={handleSort(c.key, c.isSortable)}>
              <Typography variant={'subtitle2'}>{c.title}</Typography>
              {showSort && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
            </DecksTableCell>
          )
        })}
      </tr>
    </thead>
  )
}
