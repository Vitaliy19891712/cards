import { useNavigate } from 'react-router-dom'
import { ProfileForm } from '../components/auth/profile-form'
import { useLogoutMutation, useGetMeQuery, useUpdateMeMutation } from '../services'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const [updateMe] = useUpdateMeMutation()
  const logoutHandler = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {}
  }
  return (
    <>
      <ProfileForm
        email={data?.email}
        handlerLoadAvatar={() => {}}
        handlerLogout={logoutHandler}
        name={data?.name}
        onSubmit={updateMe}
      ></ProfileForm>
    </>
  )
}
