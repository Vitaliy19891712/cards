import { useSaveGradeCardMutation } from '../../services'
import { useNavigate, useParams } from 'react-router-dom'
import { convertGrade } from '.'
import { useGetCardByIdQuery } from '../../services/cards'
import { CardLearn } from '../../components/cards/card'

export const LearnCard = ({}) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: card } = useGetCardByIdQuery({ id })
  const [updateGrade] = useSaveGradeCardMutation()

  const gradeUpdateHandler = (grade: { grade: string }) => {
    const correctGrade = convertGrade(grade.grade)
    correctGrade &&
      card &&
      card.id &&
      updateGrade({ cardId: card.id, grade: correctGrade }).then(() => {
        navigate(-1)
      })
  }

  return <CardLearn card={card} id={id} gradeUpdateHandler={gradeUpdateHandler}></CardLearn>
}
