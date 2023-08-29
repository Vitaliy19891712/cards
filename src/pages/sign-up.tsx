import { RegisterForm } from '../components/auth/register-form'
import { useSignUpMutation } from '../services'



export const SignUp = () => {
  const [signUp, result] = useSignUpMutation()
  return (
    <>
      <RegisterForm onSubmit={signUp}></RegisterForm>
    </>
  )
}
