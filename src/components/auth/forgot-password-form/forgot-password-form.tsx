import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './forgot-password-form.module.scss'
import { useRorgotPasswordForm } from './use-forgot-password-form'
import { SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

type ForgotPasswordFormPropsType = {
  onSubmit: SubmitHandler<{ email: string }>
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useRorgotPasswordForm(onSubmit)

  return (
    <Card title={'Forgot your password?'} className={s.card}>
      <form onSubmit={handleSubmit}>
        <ControlledTextField className={s.textField} label="Email" name="email" control={control}></ControlledTextField>
        <Typography variant={'body2'} className={s.text}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth className={s.button} type="submit">
          <Typography variant={'subtitle2'}>Send Instructions</Typography>
        </Button>
      </form>
      <Typography variant={'body2'} className={s.haveAccount}>
        Did you remember your password?
      </Typography>
      <NavLink to={'/login'}>
        <Typography variant={'h3'} className={s.signIn}>
          Try logging in
        </Typography>
      </NavLink>
    </Card>
  )
}
