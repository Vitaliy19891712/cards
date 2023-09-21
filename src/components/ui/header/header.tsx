import s from './header.module.scss'
import { LogoHeader } from '../../../assets/icons'
import { Button } from '../button'

import avatarLogo from './../../../assets/images/avatar.png'
import { useGetMeQuery } from '../../../services'
import { DropdownHeader } from '../../dropdownHeader'
import React from 'react'

export type HeaderProps = {
  // userInfo?: User | null
  onSignOut: () => void
}

export const Header: React.FC<HeaderProps> = React.memo(({ onSignOut }) => {
  const { data: userInfo } = useGetMeQuery()

  const className = {
    header: s.header,
    container: s.container,
    button: s.button,
  }

  let avatar = userInfo?.avatar ? userInfo.avatar : avatarLogo

  return (
    <header className={className.header}>
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
})
