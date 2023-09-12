import { SearchOutline } from '../../assets/icons'
import { Sort } from '../../components/tables/decks'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import s from './cards-list.module.scss'
import { Typography } from '../../components/ui/typography'
import { useCreateCardMutation, useGetCardsQuery, useGetDeckByIdQuery, useGetMeQuery } from '../../services'
import { Pagination } from '../../components/ui/pagination'
import { ChangeEvent, useState } from 'react'
import { useDebounce } from '../../assets'
import { Modal } from '../../components/ui/modal'
import { CardsTable, CardsTableBody, CardsTableHeader } from '../../components/tables/cards'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCardForm } from '../../components/cards/addCard'
import { useDeleteCardMutation, useUpdateCardMutation } from '../../services/cards'

const columns = [
  { key: 'question', title: 'Question', isSortable: true },
  { key: 'answer', title: 'Answer', isSortable: true },
  { key: 'updated', title: 'Last Updated', isSortable: true },
  { key: 'grade', title: 'Grade', isSortable: true },
]
export const CardsList = ({}) => {
  const [sort, setSort] = useState<Sort>(undefined)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [isModal, setIsModal] = useState(false)

  const [searchText, setSearchText] = useState('')
  const debouncedSearchText = useDebounce(searchText, 500)
  const { data: user } = useGetMeQuery()
  const { id } = useParams()

  const { data: deck, isSuccess: isSuccessDeckQuery } = useGetDeckByIdQuery(id)

  const navigate = useNavigate()

  const { data, isSuccess } = useGetCardsQuery({
    id,
    question: debouncedSearchText,
    orderBy: sort && `${sort?.key}-${sort?.direction}`,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
  })

  const [createCard] = useCreateCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  const [updateCard] = useUpdateCardMutation()

  const createCardHandler = ({ answer, question }: { question: string; answer: string }) => {
    createCard({ answer, question, id })
      .unwrap()
      .then(() => {
        setIsModal(false)
      })
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }
  const pageChangeHandler = (pages: number) => {
    setItemsPerPage(pages)
  }
  console.log(deck?.userId)

  console.log(user?.id)

  const button =
    deck?.userId === user?.id ? (
      <>
        <Button onClick={() => setIsModal(true)}>
          <Typography variant={'subtitle2'}>Add New Card</Typography>
        </Button>
        <Modal title={'Add New Pack'} open={isModal} onClose={() => setIsModal(false)}>
          <AddCardForm onSubmit={createCardHandler} closeModal={() => setIsModal(false)}></AddCardForm>
        </Modal>
      </>
    ) : (
      <>
        <Button onClick={() => navigate(`/packs/learn/${id}`)}>
          <Typography variant={'subtitle2'}>Learn to Pack</Typography>
        </Button>
      </>
    )
  return (
    <>
      <div className={s.container}>
        <div className={s.topLine}>
          <Typography variant={'large'}>Packs list</Typography>
          {isSuccessDeckQuery && button}
        </div>
        {isSuccess && (
          <>
            <div className={s.settingBar}>
              <Input
                value={searchText}
                onChange={onChangeInputHandler}
                placeholder={'Input search'}
                iconStart={<SearchOutline></SearchOutline>}
                search
                className={s.input}
              ></Input>
            </div>
            <CardsTable>
              <CardsTableHeader columns={columns} onSort={setSort} sort={sort}></CardsTableHeader>
              <CardsTableBody
                updateCard={updateCard}
                data={data}
                userId={user?.id}
                deleteCard={id => deleteCard({ id })}
              ></CardsTableBody>
            </CardsTable>
            <div className={s.pagination}>
              <Pagination
                pageSize={+itemsPerPage}
                onPageChange={setCurrentPage}
                currentPage={currentPage}
                totalCount={data ? data.pagination.totalItems : 0}
                perPage={+itemsPerPage}
                perPageOptions={[5, 10, 15]}
                onPerPageChange={pageChangeHandler}
              ></Pagination>
            </div>
          </>
        )}
      </div>
    </>
  )
}
