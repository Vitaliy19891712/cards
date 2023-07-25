import s from './header.module.scss'
import { LogoHeader } from '../../../assets/icons'
import { Button } from '../button'
import { ComponentProps } from 'react'
import avatarLogo from './../../../assets/images/avatar.png'
import { Typography } from '../typography'
export type HeaderProps = {
  button?: boolean
  name?: string
  photo?: string
} & ComponentProps<'header'>

export const Header: React.FC<HeaderProps> = ({ button = true, name, photo, ...rest }) => {
  const className = {
    header: s.header,
    container: s.container,
    button: s.button,
    avatarWrapper: s.avatarWrapper,
    name: s.name,
    avatar: s.avatar,
  }
  let avatar = photo ? photo : avatarLogo
  return (
    <header className={className.header} {...rest}>
      <div className={className.container}>
        <LogoHeader />
        {button ? (
          <Button
            variant={'primary'}
            className={className.button}
            fullWidth={false}
            // as={'a'}
            // href={'./'}
          >
            Sign In
          </Button>
        ) : (
          <div className={className.avatarWrapper}>
            <Typography variant={'subtitle1'} className={className.name}>
              {name}
            </Typography>
            <img className={className.avatar} src={avatar} alt="avatar" />
          </div>
        )}
      </div>
    </header>
  )
}
