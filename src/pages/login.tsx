import { LoginForm } from '../components/auth/login-form'
import { useLazyMeQuery, useLoginMutation, useLogoutMutation, useMeQuery } from '../services'

export const Login = () => {
  const [login] = useLoginMutation()
  const [trigger] = useLazyMeQuery()
  const [logout] = useLogoutMutation()
  return (
    <>
      <LoginForm onSubmit={login}></LoginForm>
      <button onClick={e => trigger()}>trigger</button>
      <button onClick={e => logout()}>trigger</button>
    </>
  )
}
