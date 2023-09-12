import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithReauth } from './common/base-query-with-reauth'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['GetMe', 'GetDecks', 'GetDecksById', 'GetCards'],
  endpoints: () => ({}),
})
