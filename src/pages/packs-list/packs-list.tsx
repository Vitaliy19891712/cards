import { Delete, SearchOutline } from '../../assets/icons'
import { DecksTable, DecksTableBody, DecksTableHeader, Sort } from '../../components/tables/decks'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { SliderCommon } from '../../components/ui/slider'
import { TabSwitcher } from '../../components/ui/tabswitcher'
import s from './packs-list.module.scss'
import { Typography } from '../../components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery, useGetMeQuery } from '../../services'
import { Pagination } from '../../components/ui/pagination'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '../../assets'
import { Modal } from '../../components/ui/modal'
import { AddPacksForm } from '../../components/packs'

let isFirstRender = true

const tabs = [
  {
    title: 'My Cards',
    value: 'My Cards',
  },
  {
    title: 'All Cards',
    value: 'All Cards',
  },
]
const columns = [
  { key: 'name', title: 'Name', isSortable: true },
  { key: 'cardsCount', title: 'Cards', isSortable: true },
  { key: 'updated', title: 'Last Updated', isSortable: true },
  { key: 'created', title: 'Created by', isSortable: true },
  { key: 'action', title: '', isSortable: false },
]
export const PacksList = ({}) => {
  const [sort, setSort] = useState<Sort>(undefined)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [maxCardsCount, setMaxCardsCount] = useState<number>(0)
  const [isModal, setIsModal] = useState(false)
  const [currentMinMaxCardsCount, setCurrentMinMaxCardsCount] = useState<Array<number | undefined>>(
    [0, maxCardsCount]
  )

  const [isMyCard, setIsMyCard] = useState<string>('All Cards')
  const [searchText, setSearchText] = useState('')
  const debouncedSearchText = useDebounce(searchText, 500)
  const debouncedMinMaxCards = useDebounce(currentMinMaxCardsCount, 500)
  const { data: user } = useGetMeQuery()

  const authorId = isMyCard === 'My Cards' ? user?.id : undefined

  const { data, isSuccess } = useGetDecksQuery({
    currentPage: currentPage,
    itemsPerPage: String(itemsPerPage),
    name: debouncedSearchText,
    minCardsCount: String(debouncedMinMaxCards[0]),
    maxCardsCount: String(debouncedMinMaxCards[1]),
    orderBy: sort && `${sort?.key}-${sort?.direction}`,
    authorId,
  })

  const [createDeck] = useCreateDeckMutation()

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const pageChangeHandler = (pages: number) => {
    setItemsPerPage(pages)
  }

  const sliderChangeHandler = (array: Array<number>) => {
    setCurrentMinMaxCardsCount(array)
  }

  const onclickClearHandler = () => {
    setSearchText('')
    setIsMyCard('All Cards')
    setCurrentMinMaxCardsCount([0, maxCardsCount])
  }

  useEffect(() => {
    if (isSuccess) {
      if (isFirstRender) {
        isFirstRender = false
        setMaxCardsCount(data?.maxCardsCount)
        setCurrentMinMaxCardsCount([0, data?.maxCardsCount])
      }
    }
  }, [isSuccess])

  return (
    <>
      <div className={s.container}>
        <div className={s.topLine}>
          <Typography variant={'large'}>Packs list</Typography>
          <Button onClick={() => setIsModal(true)}>
            <Typography variant={'subtitle2'}>Add New Pack</Typography>
          </Button>
          <Modal
            title={'Add New Pack'}
            open={isModal}
            onClose={() => setIsModal(false)}
            // showCloseButton={false}
          >
            <AddPacksForm onSubmit={createDeck} closeModal={() => setIsModal(false)}></AddPacksForm>
          </Modal>
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
              <div className={s.flex}>
                <Typography variant={'body2'}>Show packs cards</Typography>
                <TabSwitcher value={isMyCard} onValueChange={setIsMyCard} tabs={tabs}></TabSwitcher>
              </div>
              <div className={s.flex}>
                <Typography variant={'body2'}>Number of card</Typography>
                <SliderCommon
                  max={maxCardsCount}
                  min={0}
                  currentMax={currentMinMaxCardsCount[1] || 0}
                  currentMin={currentMinMaxCardsCount[0] || 0}
                  onChange={sliderChangeHandler}
                ></SliderCommon>
              </div>
              <Button variant={'secondary'} onClick={onclickClearHandler}>
                <Delete></Delete>
                <Typography variant={'subtitle2'}>Clear Filter</Typography>
              </Button>
            </div>
            <DecksTable>
              <DecksTableHeader columns={columns} onSort={setSort} sort={sort}></DecksTableHeader>
              <DecksTableBody data={data} userId={user?.id}></DecksTableBody>
            </DecksTable>
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
