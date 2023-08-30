import { LogoutArgs, ResetPasswordArgs, SignUpArgs, User } from './types'
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
      // transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Me'],
      // transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    signUp: builder.mutation<User, SignUpArgs>({
      query: (body: { email: any; password: any }) => ({
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
    updateMe: builder.mutation<User, Pick<User, 'avatar' | 'name' | 'email'>>({
      query: body => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body,
      }),
    }),
    recoverPassword: builder.mutation<void, Pick<SignUpArgs, 'html' | 'email' | 'password'>>({
      query: email => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body: {
          html: '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>',
          subject: 'Password recovery',
          email,
        },
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordArgs>({
      query: body => ({
        url: '/v1/auth/reset-password/{body.token}',
        method: 'POST',
        body: body.password,
      }),
    }),
  }),
})

export const {
  useGetDecksQuery,
  useMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLazyMeQuery,
  useLogoutMutation,
  useUpdateMeMutation,
} = authApi
