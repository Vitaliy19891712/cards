import { CreateCard, CreateDeck, Deck, GetCards, GetDecsParams, GetRandomCards, Paginated, SaveGradeCard } from '.'
import { baseApi } from '../baseApi'
import { Card } from '../cards'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<Paginated<Deck>, GetDecsParams>({
      query: params => ({ url: `v1/decks`, params }),
      providesTags: ['GetDecks'],
    }),
    createDeck: builder.mutation<Deck, CreateDeck>({
      query: body => ({
        url: `v1/decks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetDecks'],
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {

      //   const patchResult = dispatch(
      //     decksApi.util.updateQueryData('getDecks', arg, decks => {
      //       decks.items.pop()
      //       decks.items.unshift()

      //     })
      //   )
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
    }),
    getDeckById: builder.query<Deck, Deck['id']>({
      query: id => `v1/decks/${id}`,
      providesTags: ['GetDecksById'],
    }),
    updateDeck: builder.mutation<Deck, CreateDeck & Pick<Deck, 'id'>>({
      query: body => ({
        url: `v1/decks/${body.id}`,
        method: 'PATCH',
        body: { cover: body.cover, isPrivate: body.isPrivate, name: body.name },
      }),
      invalidatesTags: ['GetDecks'],
    }),
    deleteDeck: builder.mutation<Omit<Deck, 'author' | 'isDeleted' | 'isBlocked'>, string>({
      query: id => ({
        url: `v1/decks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetDecks'],
    }),
    getCards: builder.query<Omit<Paginated<Card>, 'maxCardsCount'>, GetCards>({
      query: params => ({
        url: `v1/decks/${params.id}/cards`,
        params: {
          question: params.question,
          answer: params.answer,
          currentPage: params.currentPage,
          itemsPerPage: params.itemsPerPage,
          orderBy: params.orderBy,
        },
      }),
      providesTags: ['GetCards'],
      // transformErrorResponse: (response, meta, arg) => {
      //   console.log(response)

      //   toast.error(response.data.message)
      // },
    }),
    createCard: builder.mutation<Card, CreateCard>({
      query: body => ({
        url: `v1/decks/${body.id}/cards`,
        method: 'Post',
        body: {
          question: body.question,
          answer: body.answer,
        },
      }),
      invalidatesTags: ['GetCards'],
    }),
    getRandomCard: builder.query<Card, GetRandomCards>({
      query: params => ({
        url: `v1/decks/${params.id}/learn`,
        params: {
          previousCardId: params.previousCardId,
        },
      }),
    }),
    saveGradeCard: builder.mutation<void, SaveGradeCard>({
      query: body => ({
        url: `v1/decks/${body.cardId}/learn`,
        method: 'Post',
        body,
      }),
    }),
  }),
})

export const {
  useSaveGradeCardMutation,
  useUpdateDeckMutation,
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetRandomCardQuery,
} = decksApi
