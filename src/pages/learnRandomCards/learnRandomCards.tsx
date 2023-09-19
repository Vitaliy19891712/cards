import { useGetRandomCardQuery, useSaveGradeCardMutation } from '../../services'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { CardLearn } from '../../components/cards/card'
import { convertGrade } from '../learnCard'

export const LearnRandomCards = ({}) => {
  const [prefCardId, setPrefCardId] = useState('')

  const { id } = useParams()
  const { data: card } = useGetRandomCardQuery({ id, previousCardId: prefCardId })
  const [updateGrade] = useSaveGradeCardMutation()

  const gradeUpdateHandler = (grade: { grade: string }) => {
    const correctGrade = convertGrade(grade.grade)
    correctGrade &&
      card &&
      card.id &&
      updateGrade({ cardId: card.id, grade: correctGrade }).then(() => {
        card.id && setPrefCardId(card.id)
      })
  }

  return <CardLearn card={card} id={id} gradeUpdateHandler={gradeUpdateHandler}></CardLearn>
}
