import { LogoutArgs, SignUpArgs, User } from './types'
import { baseApi } from '../baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LogoutArgs>({
      query: body => ({
        url: 'v1/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Me'],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Me'],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    signUp: builder.mutation<User, SignUpArgs>({
      query: body => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
          html: '<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn\'t work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##',
          subject: 'Confirmation Email',
          sendConfirmationEmail: true,
        },
      }),
    }),
    getDecks: builder.query<any, void>({
      query: () => `v1/decks`,
    }),
    me: builder.query<User, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
      providesTags: ['Me'],
    }),
  }),
})

export const { useGetDecksQuery, useMeQuery, useLoginMutation, useSignUpMutation, useLazyMeQuery,useLogoutMutation } =
  authApi
