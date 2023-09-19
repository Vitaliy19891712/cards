import s from './header.module.scss'
import { LogoHeader } from '../../../assets/icons'
import { Button } from '../button'
import { ComponentProps } from 'react'
import avatarLogo from './../../../assets/images/avatar.png'
import { User } from '../../../services'
import { DropdownHeader } from '../../dropdownHeader'

export type HeaderProps = {
  // isAuth?: boolean
  userInfo?: User | null
  onSignOut: () => void
} & ComponentProps<'header'>

export const Header: React.FC<HeaderProps> = ({ userInfo = null, onSignOut, ...rest }) => {
  const className = {
    header: s.header,
    container: s.container,
    button: s.button,
  }

  let avatar = userInfo?.avatar ? userInfo.avatar : avatarLogo

  return (
    <header className={className.header} {...rest}>
      <div className={className.container}>
        <LogoHeader />
        {!userInfo ? (
          <Button variant={'primary'} className={className.button} fullWidth={false} as={'a'} href={'/login'}>
            Sign In
          </Button>
        ) : (
          <DropdownHeader avatar={avatar} onSignOut={onSignOut} userInfo={userInfo} />
        )}
      </div>
    </header>
  )
}
