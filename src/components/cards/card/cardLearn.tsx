import { useState } from 'react'
import { Arrow } from '../../../assets/icons'
import { Card as CardType } from '../../../services/cards'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import { RateCardForm } from '../rateCard'
import s from './cardLearn.module.scss'
import { NavLink } from 'react-router-dom'
type CardLearnProps = {
  card: CardType | undefined
  id: string | undefined
  gradeUpdateHandler: (grade: { grade: string }) => void
}
export const CardLearn: React.FC<CardLearnProps> = ({ card, gradeUpdateHandler, id }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const gradeUpdate = (grade: { grade: string }) => {
    gradeUpdateHandler(grade), setIsShowAnswer(false)
  }
  return (
    <div className={s.container}>
      <NavLink to={`/packs/${id}/cards`}>
        {' '}
        <Typography variant={'body2'} className={s.back}>
          <Arrow></Arrow>Back to Cards List
        </Typography>
      </NavLink>
      <Card title="Create new password" className={s.card}>
        <Typography variant={'body1'} className={s.question}>
          <b>Question:</b> {card?.question}
        </Typography>
        <Typography variant={'body2'} className={s.shots}>
          Количество попыток ответов на вопрос: <b>{card?.shots}</b>
        </Typography>
        {!isShowAnswer && (
          <Button fullWidth variant={'primary'} className={s.button} onClick={() => setIsShowAnswer(true)}>
            Show Answer
          </Button>
        )}
        {isShowAnswer && (
          <>
            <Typography variant={'body1'} className={s.answer}>
              <b>Answer:</b> {card?.answer}
            </Typography>
            <Typography variant={'subtitle1'} className={s.rate}>
              Rate yourself:
            </Typography>
            <RateCardForm onSubmit={gradeUpdate}></RateCardForm>
          </>
        )}
        <div></div>
      </Card>
    </div>
  )
}
