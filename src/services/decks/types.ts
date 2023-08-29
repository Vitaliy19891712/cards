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
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: string
  rating: number
  isDeleted?: any
  isBlocked?: any
  created: string
  updated: string
  cardsCount: number
}
export type CreateDeckInput = FormData
// export type CreateDeckInput = Pick<Deck, 'cover' | 'name' | 'isPrivate'>
// export type DeleteDeckInput = { deckId: Deck['id'] }
