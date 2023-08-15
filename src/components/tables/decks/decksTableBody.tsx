import { ComponentPropsWithoutRef } from 'react'
import { DecksTableRow, Item } from '.'

type DecksTableBodyPropsType = Omit<
  {
    data: Array<Item>
  } & ComponentPropsWithoutRef<'tbody'>,
  'children'
>
export const DecksTableBody: React.FC<DecksTableBodyPropsType> = ({ data }) => {
  return (
    <tbody>
      {data.map(item => (
        <DecksTableRow key={item.title} item={item}></DecksTableRow>
      ))}
    </tbody>
  )
}
