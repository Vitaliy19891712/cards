import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './decksTableCell.module.scss'

type DecksTableCellPropsType<T extends ElementType = 'td'> = {
  children: ReactNode
  onClick?: () => void
  as?: T
  className?: string
}
export const DecksTableCell = <T extends ElementType = 'td'>(
  props: DecksTableCellPropsType<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof DecksTableCellPropsType<T>>
) => {
  const { as: Component = 'td', className, children, onClick, ...rest } = props
  return (
    <Component className={`${s.cell} ${className}`} onClick={onClick} {...rest}>
      {children}
    </Component>
  )
}
