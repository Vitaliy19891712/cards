import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './check-email.module.scss'
import {CheckEmailLogo} from './../../../assets/icons'
type CheckEmailPropsType = {
  onSubmit: () => void
  email: string
}

export const CheckEmail: React.FC<CheckEmailPropsType> = ({ onSubmit, email }) => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Check Email
      </Typography>
      <CheckEmailLogo className={s.logo} />
      <Typography variant={'body2'} className={s.text}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button fullWidth onClick={onSubmit} as={'a'} href={'http://google.com'}>
        <Typography variant={'subtitle2'}>
          Back to Sign In
        </Typography>
      </Button>
    </Card>
  )
}
