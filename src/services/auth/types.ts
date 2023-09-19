export type User = {
  email: string
  name: string | null
  id: string
  isEmailVerified: boolean
  avatar: string
  dreated: string
  update: string
}
export type LogoutArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignUpArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}
export type ResetPasswordArgs = {
  token?: string
  password: string
}
