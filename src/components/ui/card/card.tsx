import { Typography } from '../typography'
import s from './card.module.scss'
import { ReactNode } from 'react'

type CardPropsType = {
  children?: ReactNode
  title?: string
}

export const Card: React.FC<CardPropsType> = ({ children, title }) => {
  return (
    <div className={s.card}>
      {title && (
        <Typography as={'h1'} variant={'large'} className={s.title}>
          {title}
        </Typography>
      )}
      <div>{children}</div>
    </div>
  )
}
