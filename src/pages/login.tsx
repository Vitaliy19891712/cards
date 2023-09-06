import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/auth/login-form'
import { useLoginMutation } from '../services'

export const Login = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const loginHandler = async (body: { email: string; password: string; rememberMe: boolean }) => {
    try {
      await login(body)
      navigate('/packs')
    } catch (error) {}
  }

  return (
    <>
      <LoginForm onSubmit={loginHandler}></LoginForm>
    </>
  )
}
