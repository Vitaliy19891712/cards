import { useNavigate } from 'react-router-dom'
import { ForgotPasswordForm } from '../components/auth/forgot-password-form'
import { useRecoverPasswordMutation } from '../services'

export const ForgotPassword = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const recoverPasswordHandler = async (body: { email: string }) => {
    try {
      await recoverPassword(body)
      navigate('/check-email')
    } catch (error) {}
  }
  return (
    <>
      <ForgotPasswordForm onSubmit={recoverPasswordHandler}></ForgotPasswordForm>
    </>
  )
}
