import { LoginForm } from '../components/auth/login-form'
import { useLoginMutation } from '../services'

export const Login = () => {
  const [login, result] = useLoginMutation()
  // console.log(result)

  return (
    <>
      <LoginForm onSubmit={login}></LoginForm>
    </>
  )
}
