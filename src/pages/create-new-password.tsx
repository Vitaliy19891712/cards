import { useNavigate, useParams } from 'react-router-dom'
import { CreatePasswordForm } from '../components/auth/create-password-form'
import { useResetPasswordMutation } from '../services'

export const CreateNewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  let { token } = useParams()
console.log(token)

  const resetPasswordHandler = async ({ password }: { password: string }) => {
    try {
      await resetPassword({ password, token })
      navigate('/login')
    } catch (error) {}
  }
  return (
    <>
      <CreatePasswordForm onSubmit={resetPasswordHandler}></CreatePasswordForm>
    </>
  )
}
