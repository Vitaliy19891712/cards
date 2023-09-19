export type Card = {
  id?: string | undefined
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  grade: number
  created: string
  updated: string
}

export type UpdateCardParams = {
  id: string
  questionImg?: string
  answerImg?: string
  question: string
  answer: string
  questionVideo?: string
  answerVideo?: string
}
