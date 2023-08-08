import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './create-password-form.module.scss'
import { useCreatePasswordForm } from './use-create-password-form'
import { SubmitHandler } from 'react-hook-form'

type CreatePasswordFormPropsType = {
  onSubmit: SubmitHandler<{ password: string }>
}

export const CreatePasswordForm: React.FC<CreatePasswordFormPropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useCreatePasswordForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit}>
        <ControlledTextField
          className={s.textField}
          label="Password"
          name="password"
          control={control}
        ></ControlledTextField>
        <Typography variant={'body2'} className={s.text}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth  type="submit">
        <Typography variant={'subtitle2'} >Create New Password</Typography>
        </Button>
      </form>
    </Card>
  )
}
