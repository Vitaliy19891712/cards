import { createApi } from '@reduxjs/toolkit/query/react'
import { User } from './types'
import { baseQueryWithReauth } from '../common/base-query-with-reauth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Me'],
  endpoints: builder => ({
    getDecks: builder.query<any, void>({
      query: () => `v1/decks`,
    }),
    me: builder.query<User, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
      providesTags: ['Me'],
    }),
    login: builder.mutation<void, { email: string; password: string }>({
      query: body => ({
        url: 'v1/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
})

export const { useGetDecksQuery, useMeQuery, useLoginMutation } = authApi
