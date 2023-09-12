import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './cardsTable.module.scss'
type DecksTablePropsType = {
  children: ReactNode
} & ComponentPropsWithoutRef<'table'>
export const CardsTable: React.FC<DecksTablePropsType> = ({ children }) => {
  return <table className={s.table}>{children}</table>
}
