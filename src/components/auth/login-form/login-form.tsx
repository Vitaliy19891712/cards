import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { ControlledCheckbox } from '../../ui/controlled'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './login-form.module.scss'
import { useLoginForm } from './use-login-form'
import { SubmitHandler } from 'react-hook-form'

type LoginFormPropsType = {
  onSubmit: SubmitHandler<{ email: string; password: string; rememberMe: boolean}>
}

export const LoginForm: React.FC<LoginFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useLoginForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField
          className={s.textField}
          label="Email"
          name="email"
          control={control}
        ></ControlledTextField>
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
        <Typography as={'a'} variant={'body2'} className={s.forgot}>
          Forgot password
        </Typography>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Don't have an account?
      </Typography>
      <Typography as={'a'} variant={'h3'} className={s.signUp} href={'http://www.google.ru'}>
        Sugn Up
      </Typography>
    </Card>
  )
}
