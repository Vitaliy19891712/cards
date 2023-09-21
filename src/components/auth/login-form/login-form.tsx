import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './login-form.module.scss'
import { useLoginForm } from './use-login-form'
import { SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

type LoginFormPropsType = {
  onSubmit: SubmitHandler<{ email: string; password: string; rememberMe: boolean }>
}

export const LoginForm: React.FC<LoginFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useLoginForm(onSubmit)

  return (
    <Card title={' Sign In'} className={s.card}>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField className={s.textField} label="Email" name="email" control={control}></ControlledTextField>
        <ControlledTextField
          className={s.textField}
          label="Password"
          name="password"
          control={control}
        ></ControlledTextField>
        <ControlledCheckbox
          className={s.checkbox}
          label="RememberMe"
          name="rememberMe"
          control={control}
        ></ControlledCheckbox>
        <NavLink to={'/forgot-password'}>
          <Typography variant={'body2'} className={s.forgot}>
            Forgot password
          </Typography>
        </NavLink>

        <Button fullWidth className={s.button} type="submit">
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Don't have an account?
      </Typography>
      <NavLink to={'/register'}>
        <Typography variant={'h3'} className={s.signUp}>
          Sugn Up
        </Typography>
      </NavLink>
    </Card>
  )
}
