import { useCallback } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '../../../assets/icons'
import { usePagination } from './usePagination'
import s from './pagination.module.scss'
import { Select } from '../select'
import { Typography } from '../typography'
export type PaginationPropsType = {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  perPage?: number
  perPageOptions?: number[]
  onPerPageChange?: (itemPerPage: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  perPage = null,
  perPageOptions,
  onPerPageChange,
}) => {
  const { paginationRange, isLastPage, isFirstPage, handleMainPageClicked } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    onPageChange,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const handleNextPageClicked = useCallback(() => {
    onPageChange(currentPage + 1)
  }, [currentPage, onPageChange])

  const handlePreviousPageClicked = useCallback(() => {
    onPageChange(currentPage - 1)
  }, [currentPage, onPageChange])
  return (
    <div className={s.pagination}>
      {/* Left navigation arrow */}
      <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />
      <MainPaginationButtons
        currentPage={currentPage}
        onClick={handleMainPageClicked}
        paginationRange={paginationRange}
      />

      {/*  Right Navigation arrow */}
      <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            perPage,
            perPageOptions,
            onPerPageChange,
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}
const NextButton: React.FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.arrow}>
      <KeyboardArrowRight className={s.svg} />
    </button>
  )
}
const PrevButton: React.FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.arrow}>
      <KeyboardArrowLeft className={s.svg} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}
const MainPaginationButtons: React.FC<MainPaginationButtonsProps> = ({
  paginationRange,
  currentPage,
  onClick,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)} />
      })}
    </>
  )
}
type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots: React.FC = () => {
  return (
    <span>
      <Typography variant={'body2'}> &#8230;</Typography>
    </span>
  )
}
const PageButton: React.FC<PageButtonProps> = ({ onClick, disabled, selected, page }) => {
  return (
    <button onClick={onClick} disabled={selected || disabled} className={s.pageButton}>
      <Typography variant={'body2'}> {page}</Typography>
    </button>
  )
}
export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: number) => void
}

export const PerPageSelect: React.FC<PerPageSelectProps> = ({
  perPage,
  perPageOptions,
  onPerPageChange,
}) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <div className={s.select}>
      <Typography as={'div'} variant={'body2'}>
        Показать
      </Typography>
      <Select
        className={s.silectItem}
        value={perPage}
        options={selectOptions}
        onChange={onPerPageChange}
        variant="pagination"
      />
      <Typography as={'div'} variant={'body2'}>
        на странице
      </Typography>
    </div>
  )
}
