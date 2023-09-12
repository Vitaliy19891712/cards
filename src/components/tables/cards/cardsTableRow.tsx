import { ComponentPropsWithoutRef, useState } from 'react'
import { CardsTableCell } from './cardsTableCell'
import s from './cardsTableRow.module.scss'
import { Typography } from '../../ui/typography'
import { Delete, EditIcon } from '../../../assets/icons'
import { Modal } from '../../ui/modal'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'
import { Card, UpdateCardParams } from '../../../services/cards'
import { DeleteCardForm } from '../../cards/deleteCard'
import { UpdateCardForm } from '../../cards/updateCard'

type CardsTableRowPropsType = Omit<
  {
    item: Card
    userId: string | undefined
    deleteCard: (id: string) => Promise<{ data: void } | { error: FetchBaseQueryError | SerializedError }>
    updateCard: ({
      answer,
      question,
      questionImg,
      answerImg,
      questionVideo,
      answerVideo,
      id,
    }: UpdateCardParams & Pick<Card, 'id'>) => Promise<
      { data: Card } | { error: FetchBaseQueryError | SerializedError }
    >
  } & ComponentPropsWithoutRef<'tr'>,
  'children'
>

export const CardsTableRow: React.FC<CardsTableRowPropsType> = ({ item, userId, updateCard, deleteCard }) => {
  const date = new Date(item.updated)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const formattedDate = `${day}.${month}.${year}`
  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalUpdate, setIsModalUpdate] = useState(false)
  const deleteCardHandler = () => {
    deleteCard(item.id).then(() => {
      setIsModalDelete(false)
    })
  }
  const updateCardHandler = ({ answer, question }: { question: string; answer: string }) => {
    updateCard({ answer, question, id: item.id }).then(() => {
      setIsModalUpdate(false)
    })
  }
  const icons = (
    <>
      <Delete onClick={() => setIsModalDelete(true)} className={s.icon} />
      <Modal title={'Add New Card'} open={isModalDelete} onClose={() => setIsModalDelete(false)}>
        <DeleteCardForm closeModal={() => setIsModalDelete(false)} onSubmit={deleteCardHandler} />
      </Modal>
      <EditIcon onClick={() => setIsModalUpdate(true)} className={s.icon} />
      <Modal title={'Edit Card'} open={isModalUpdate} onClose={() => setIsModalUpdate(false)}>
        <UpdateCardForm closeModal={() => setIsModalUpdate(false)} onSubmit={updateCardHandler} />
      </Modal>
    </>
  )
  return (
    <tr key={item.id} className={s.row}>
      <CardsTableCell>
        <Typography variant={'body2'}>{item.question}</Typography>
      </CardsTableCell>
      <CardsTableCell>
        <Typography variant={'body2'}>{item.answer}</Typography>
      </CardsTableCell>
      <CardsTableCell>
        <Typography variant={'body2'}>{formattedDate}</Typography>
      </CardsTableCell>
      <CardsTableCell>
        <Typography variant={'body2'}>
          <div className={s.flex}>
            <div>{'...stars'}</div> <div>{userId === item.userId && icons}</div>
          </div>
        </Typography>
      </CardsTableCell>
      {/* {userId === item.userId && <CardsTableCell className={s.icons}>{icons}</CardsTableCell>} */}
    </tr>
  )
}
