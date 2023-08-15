import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './decksTable.module.scss'
type DecksTablePropsType = {
  children: ReactNode
} & ComponentPropsWithoutRef<'table'>
export const DecksTable: React.FC<DecksTablePropsType> = ({ children }) => {
  return <table className={s.table}>{children}</table>
}
