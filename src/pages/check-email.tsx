import { CheckEmailForm } from '../components/auth/check-email-form'
import { useGetMeQuery } from '../services'

export const CheckEmail = () => {
  const { data } = useGetMeQuery()
  return (
    <>
      <CheckEmailForm email={data?.email}></CheckEmailForm>
    </>
  )
}
