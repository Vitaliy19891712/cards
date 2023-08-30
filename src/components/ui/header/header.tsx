import s from './header.module.scss'
import { LogoHeader } from '../../../assets/icons'
import { Button } from '../button'
import { ComponentProps } from 'react'
import avatarLogo from './../../../assets/images/avatar.png'
import { Typography } from '../typography'
import { Outlet } from 'react-router-dom'
import { Dropdownmenu } from '../dropDownMenu'
import { User } from '../../../services'

export type HeaderProps = {
  isAuth?: boolean
  userInfo?: User | null
  onSignOut?: () => void
} & ComponentProps<'header'>

export const Header: React.FC<HeaderProps> = ({ isAuth = false, userInfo, ...rest }) => {
  const className = {
    header: s.header,
    container: s.container,
    button: s.button,
    avatarWrapper: s.avatarWrapper,
    name: s.name,
    avatar: s.avatar,
  }

  let avatar = userInfo?.avatar ? userInfo.avatar : avatarLogo

  return (
    <header className={className.header} {...rest}>
      <div className={className.container}>
        <LogoHeader />
        {!isAuth ? (
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
          <Dropdownmenu
            onChange={() => {}}
            items={[
              <div>11111111111111111111</div>,
              <div>222222222222222222222</div>,
              <div>3</div>,
              <div>4</div>,
            ]}
            trigger={
              <div className={className.avatarWrapper}>
                <Typography variant={'subtitle1'} className={className.name}>
                  {userInfo?.name}
                </Typography>
                <img className={className.avatar} src={avatar} alt="avatar" />
              </div>
            }
          ></Dropdownmenu>
        )}
      </div>
      <Outlet></Outlet>
    </header>
  )
}
