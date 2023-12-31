import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './register-form.module.scss'
import { useRegisterForm } from './use-register-form'
import { SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

type RegisterFormPropsType = {
  onSubmit: SubmitHandler<{ email: string; password: string; confirmPassword: string }>
}

export const RegisterForm: React.FC<RegisterFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useRegisterForm(onSubmit)

  return (
    <Card title={' Sign Up'} className={s.card}>
      <form onSubmit={handleSubmit}>
        <ControlledTextField className={s.textField} label="Email" name="email" control={control}></ControlledTextField>
        <ControlledTextField
          className={s.textField}
          label="Password"
          name="password"
          control={control}
        ></ControlledTextField>
        <ControlledTextField
          className={s.textField}
          label="Conform Password"
          name="confirmPassword"
          control={control}
        ></ControlledTextField>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant={'subtitle2'}>Sign Up</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Already have an account?
      </Typography>
      <NavLink to={'/login'}>
        <Typography variant={'h3'} className={s.signIn}>
          Sugn In
        </Typography>
      </NavLink>
    </Card>
  )
}
