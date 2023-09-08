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
      invalidatesTags: ['GetMe'],
      // transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['GetMe'],

      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     authApi.util.updateQueryData('getMe', undefined, user => {
      //       user = undefined
      //     })
      //   )
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
      // transformErrorResponse(baseQueryReturnValue, meta, arg) {},
    }),
    signUp: builder.mutation<User, SignUpArgs>({
      query: body => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
          html: `<b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:5173/confirm-email/##token##">Confirm email</a>. If it doesn\'t work, copy and paste the following link in your browser:<br/>http://localhost:5173/confirm-email/##token##`,
          subject: 'Confirmation Email',
          sendConfirmationEmail: true,
        },
      }),
    }),
    getMe: builder.query<User, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
      providesTags: ['GetMe'],
    }),
    updateMe: builder.mutation<User, Pick<User, 'name'>>({
      query: body => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['GetMe'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('getMe', undefined, user => {
            user.name = arg.name
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    recoverPassword: builder.mutation<void, Pick<SignUpArgs, 'email'>>({
      query: email => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body: {
          html: `<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/create-password/##token##">here</a> to recover your password</p>`,
          subject: 'Password recovery',
          email: email.email,
        },
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordArgs>({
      query: body => ({
        url: `/v1/auth/reset-password/${body.token}`,
        method: 'POST',
        body: { password: body.password },
      }),
    }),
    verifyEmail: builder.mutation<void, { code: string }>({
      query: body => ({
        url: 'v1/auth/verify-email',
        method: 'POST',
        body,
      }),
    }),
    resendVerifyEmail: builder.mutation<void, { userId: string }>({
      query: body => ({
        url: 'v1/auth/resend-verification-email',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useUpdateMeMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useResendVerifyEmailMutation,
} = authApi
