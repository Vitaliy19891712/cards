import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './profile.module.scss'
import { ButtonArrow, EditIcon } from '../../../assets/icons'
import avatarLogo from './../../../assets/images/avatar.png'
import { useState } from 'react'
import { ControlledTextField } from '../../ui/controlled'
import { useProfileForm } from './use-profile-form'
import { SubmitHandler } from 'react-hook-form'

type EditProfilePropsType = {
  handlerLoadAvatar: () => void
  handlerLogout: () => void
  email: string
  name: string
  onSubmit: SubmitHandler<{ name: string }>
  photo?: string
}

export const Profile: React.FC<EditProfilePropsType> = ({
  handlerLogout,
  handlerLoadAvatar,
  onSubmit,
  email,
  name,
  photo,
}) => {
  const { handleSubmit, control } = useProfileForm(onSubmit)

  const [isAvaBroken, setIsAvaBroken] = useState(false)

  const [isEdit, setIsEdit] = useState(false)

  const errorHandler = () => {
    setIsAvaBroken(true)
  }

  const onClickHandler = () => {
    setIsEdit(true)
  }

  const saveChangeHandler = async () => {
    try {
      await handleSubmit()
      setIsEdit(false)
    } catch (error) {}
  }
  
  let avatar = photo && !isAvaBroken ? photo : avatarLogo

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Personal Information
      </Typography>
      <div className={s.avatar}>
        <img src={avatar} alt="avatar" onError={errorHandler} className={s.avatat} />
        {!isEdit && (
          <div className={s.editIcon} onClick={handlerLoadAvatar}>
            <EditIcon />
          </div>
        )}
      </div>
      {isEdit ? (
        <form onSubmit={saveChangeHandler} className={s.form}>
          <ControlledTextField
            className={s.textField}
            label="Nickname"
            name="name"
            control={control}
          ></ControlledTextField>
          <Button fullWidth className={s.button} type="submit">
            <Typography variant={'subtitle2'}>Save Changes</Typography>
          </Button>
        </form>
      ) : (
        <>
          <div className={s.nameWrapper}>
            <Typography variant={'h1'} className={s.name}>
              {name}
            </Typography>
            <EditIcon onClick={onClickHandler} />
          </div>
          <Typography variant={'body2'} className={s.text}>
            {email}
          </Typography>
          <Button onClick={handlerLogout} variant={'secondary'}>
            <ButtonArrow />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </>
      )}
    </Card>
  )
}
