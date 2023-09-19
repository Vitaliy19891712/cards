import { Card, UpdateCardParams } from '.'
import { baseApi } from '../baseApi'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCardById: builder.query<Card, Pick<Card, 'id'>>({
      query: params => `v1/cards/${params.id}`,
    }),
    updateCard: builder.mutation<Card, UpdateCardParams>({
      query: body => ({
        url: `v1/cards/${body.id}`,
        method: 'PATCH',
        body: {
          question: body.question,
          answer: body.answer,
        },
      }),
      invalidatesTags: ['GetCards'],
    }),
    deleteCard: builder.mutation<void, Pick<Card, 'id'>>({
      query: params => ({
        url: `v1/cards/${params.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetCards'],
    }),
  }),
})

export const { useDeleteCardMutation, useGetCardByIdQuery, useUpdateCardMutation } = cardsApi
