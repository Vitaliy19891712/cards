import { ProfileForm } from '../components/auth/profile-form'

export const Profile = () => {
  return (
    <>
      <ProfileForm
        email={'asd@da.com'}
        handlerLoadAvatar={() => {}}
        handlerLogout={() => {}}
        name={'Vitaliy'}
        onSubmit={() => {}}
      ></ProfileForm>
    </>
  )
}
