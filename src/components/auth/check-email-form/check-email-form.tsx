import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from './check-email-form.module.scss'
import { CheckEmailLogo } from '../../../assets/icons'
import { useNavigate } from 'react-router-dom'

type CheckEmailPropsType = {
  email?: string
}

export const CheckEmailForm: React.FC<CheckEmailPropsType> = ({ email }) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('/login')
  }

  return (
    <Card title={'Check Email'} className={s.card}>
      <CheckEmailLogo className={s.logo} />
      <Typography variant={'body2'} className={s.text}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button fullWidth onClick={onClickHandler}>
        <Typography variant={'subtitle2'}>Back to Sign In</Typography>
      </Button>
    </Card>
  )
}
