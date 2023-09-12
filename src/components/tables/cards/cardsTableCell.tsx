import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './cardsTableCell.module.scss'

type CardsTableCellPropsType<T extends ElementType = 'td'> = {
  children: ReactNode
  onClick?: () => void
  as?: T
  className?: string
}
export const CardsTableCell = <T extends ElementType = 'td'>(
  props: CardsTableCellPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardsTableCellPropsType<T>>
) => {
  const { as: Component = 'td', className, children, onClick, ...rest } = props
  return (
    <Component className={`${s.cell} ${className}`} onClick={onClick} {...rest}>
      {children}
    </Component>
  )
}
