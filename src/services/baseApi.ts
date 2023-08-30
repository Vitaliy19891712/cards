import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithReauth } from './common/base-query-with-reauth'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
    // prepareHeaders: headers => {
    //   headers.append('x-auth-skip', 'true')
    // },
  }),
  tagTypes: ['Me'],
  endpoints: () => ({}),
})
