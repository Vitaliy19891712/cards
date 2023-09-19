
import { User } from '..'

export type GetDeckParams = {
  authorId?: string
  name?: string
  minCardsCount?: number
  maxCardsCount?: number
}

export type Decks = Deck[]

export type DeckAuthor = Pick<User, 'id' | 'name'>

export type Deck = {
  author: DeckAuthor
  id?: string
  userId: string
  name: string
  isPrivate?: boolean
  shots: number
  cover?: string
  rating: number
  isDeleted?: any
  isBlocked?: any
  created: string
  updated: string
  cardsCount: number
}

export type Pagination = {
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}

export type Paginated<T> = {
  pagination: Pagination
  items: T[]
  maxCardsCount: number
}

export type GetDecsParams = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
export type CreateDeck = Pick<Deck, 'cover' | 'name' | 'isPrivate'>

export type DeckID = Pick<Deck, 'cover' | 'name' | 'isPrivate'>

export type GetCards = {
  id?: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type GetRandomCards = {
  id?: string
  previousCardId?: string
}
export type SaveGradeCard = {
  cardId: string
  grade: 1 | 2 | 3 | 4 | 5
}
export type CreateCard = Pick<GetCards, 'id'> & {
  question: string
  answer: string
}
