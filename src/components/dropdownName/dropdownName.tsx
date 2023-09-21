import { useState } from 'react'
import { Cicle, Delete, EditIcon, Play } from '../../assets/icons'
import { CreateDeck, Deck } from '../../services'
import { DeletePackForm } from '../packs/deletePack'
import { Modal } from '../ui/modal'
import { Typography } from '../ui/typography'
import s from './dropdownName.module.scss'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { SerializedError } from '@reduxjs/toolkit'
import { UpdatePackForm } from '../packs/updatePack'
import { Dropdownmenu } from '../ui/dropdownmenu/dropdownmenu'

type DropdownHeaderProps = {
  id: string | undefined
  deleteDeck: (
    id: string
  ) => Promise<
    { data: Omit<Deck, 'author' | 'isDeleted' | 'isBlocked'> } | { error: FetchBaseQueryError | SerializedError }
  >
  updateDeck: ({
    name,
    cover,
    isPrivate,
    id,
  }: CreateDeck & Pick<Deck, 'id'>) => Promise<{ data: Deck } | { error: FetchBaseQueryError | SerializedError }>
}

export const DropdownName: React.FC<DropdownHeaderProps> = ({ deleteDeck, updateDeck, id }) => {
  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalUpdate, setIsModalUpdate] = useState(false)

  const deletePackHandler = () => {
    if (id) {
      deleteDeck(id).then(() => {
        setIsModalDelete(false)
      })
    }
  }

  const updatePackHandler = ({ name, cover, isPrivate }: CreateDeck) => {
    updateDeck({ name, cover, isPrivate, id }).then(() => {
      setIsModalUpdate(false)
    })
  }

  return (
    <Dropdownmenu
      items={[
        <a href={`/packs/${id}/learn`} className={s.item}>
          <Play></Play>
          <Typography variant={'caption'}>{'Learn'}</Typography>
        </a>,
        <>
          <div className={s.item} onClick={() => setIsModalUpdate(true)}>
            <EditIcon></EditIcon>
            <Typography variant={'caption'}>{'Edit'}</Typography>
          </div>
          <Modal title={'Edit Pack'} open={isModalUpdate} onClose={() => setIsModalUpdate(false)}>
            <UpdatePackForm closeModal={() => setIsModalUpdate(false)} onSubmit={updatePackHandler} />
          </Modal>
        </>,
        <>
          <div className={s.item} onClick={() => setIsModalDelete(true)}>
            <Delete></Delete>
            <Typography variant={'caption'}>{'Delete'}</Typography>
          </div>
          <Modal title={'Delete Pack'} open={isModalDelete} onClose={() => setIsModalDelete(false)}>
            <DeletePackForm closeModal={() => setIsModalDelete(false)} onSubmit={deletePackHandler} />
          </Modal>
        </>,
      ]}
      trigger={<Cicle className={s.rotate}></Cicle>}
    ></Dropdownmenu>
  )
}
