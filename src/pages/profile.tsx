import { useNavigate } from 'react-router-dom'
import { ProfileForm } from '../components/auth/profile-form'
import { useLogoutMutation, useGetMeQuery, useUpdateMeMutation } from '../services'
import { Typography } from '../components/ui/typography'
import { Arrow } from '../assets/icons'
import s from './profile.module.scss'

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
    <div className={s.container}>
      <Typography as={'a'} variant={'body2'} className={s.back} href={'/packs'}>
        <Arrow></Arrow>Back to Packs List
      </Typography>
      <ProfileForm
        email={data?.email}
        handlerLoadAvatar={() => {}}
        handlerLogout={logoutHandler}
        name={data?.name}
        onSubmit={updateMe}
      ></ProfileForm>
    </div>
  )
}
