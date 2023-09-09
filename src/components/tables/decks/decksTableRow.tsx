import { ComponentPropsWithoutRef, useState } from 'react'
import { DecksTableCell } from './decksTableCell'
import s from './decksTableRow.module.scss'
import { Typography } from '../../ui/typography'
import { Deck } from '../../../services'
import { Delete, EditIcon, Play } from '../../../assets/icons'
import { Modal } from '../../ui/modal'
import { DeletePackForm } from '../../packs/deletePack'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'

type DecksTableRowPropsType = Omit<
  {
    userId: string | undefined
    item: Deck
    deleteDeck: (
      id: string
    ) => Promise<
      | { data: Omit<Deck, 'author' | 'isDeleted' | 'isBlocked'> }
      | { error: FetchBaseQueryError | SerializedError }
    >
  } & ComponentPropsWithoutRef<'tr'>,
  'children'
>

export const DecksTableRow: React.FC<DecksTableRowPropsType> = ({ item, userId, deleteDeck }) => {
  const date = new Date(item.updated)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const formattedDate = `${day}.${month}.${year}`
  const [isModalDelete, setIsModalDelete] = useState(false)
  const deletePackHandler = () => {
    deleteDeck(item.id).then(() => {
      setIsModalDelete(false)
    })
  }
  const icons = (
    <>
      <Play />
      {userId === item.author.id && (
        <>
          <Delete onClick={() => setIsModalDelete(true)} />
          <Modal
            title={'Add New Pack'}
            open={isModalDelete}
            onClose={() => setIsModalDelete(false)}
          >
            <DeletePackForm
              closeModal={() => setIsModalDelete(false)}
              deletePack={deletePackHandler}
            />
          </Modal>
        </>
      )}
      {userId === item.author.id && <EditIcon />}
    </>
  )

  return (
    <tr key={item.id} className={s.row}>
      <DecksTableCell>
        <Typography variant={'body2'} as={'a'} href={`/cards/${item.id}`}>
          {item.name}
        </Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.cardsCount}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{formattedDate}</Typography>
      </DecksTableCell>
      <DecksTableCell>
        <Typography variant={'body2'}>{item.author.name}</Typography>
      </DecksTableCell>
      <DecksTableCell className={s.icons}>{icons}</DecksTableCell>
    </tr>
  )
}
