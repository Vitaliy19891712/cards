import { Typography } from '../typography'
import s from './card.module.scss'
import { ReactNode } from 'react'

type CardPropsType = {
  children?: ReactNode
  title?: string
  className?:string
}

export const Card: React.FC<CardPropsType> = ({ children, title ,className}) => {
  return (
    <div className={`${s.card} ${className}`} >
      {title && (
        <Typography as={'h1'} variant={'large'} className={s.title}>
          {title}
        </Typography>
      )}
      {children}
    </div>
  )
}
