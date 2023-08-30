import { LoginForm } from '../components/auth/login-form'
import { useLazyMeQuery, useLoginMutation, useLogoutMutation, useMeQuery } from '../services'

export const Login = () => {
  const [login] = useLoginMutation()
  const [trigger] = useLazyMeQuery()
  const [logout] = useLogoutMutation()



  return (
    <>
      <LoginForm onSubmit={login}></LoginForm>
      <button onClick={e => trigger()} style={{ color: 'black' }}>
        me
      </button>
      <button onClick={e => logout()} style={{ color: 'black' }}>
        logout
      </button>
    </>
  )
}
