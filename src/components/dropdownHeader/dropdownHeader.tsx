import { NavLink } from 'react-router-dom'
import { ButtonArrow, Person } from '../../assets/icons'
import { User } from '../../services'
import { CommonDropdownmenu } from '../ui/commonDropdownmenu'

import { Typography } from '../ui/typography'
import s from './dropdownHeader.module.scss'

type DropdownHeaderProps = {
  userInfo?: User | null
  avatar: string
  onSignOut: () => void
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({ onSignOut, avatar, userInfo }) => {
  return (
    <CommonDropdownmenu
      items={[
        <div className={s.item}>
          <img className={s.avatar} src={avatar} alt="avatar" />
          <div className={s.text}>
            <Typography variant={'subtitle2'}>{userInfo?.name}</Typography>
            <Typography variant={'caption'} style={{ color: '#808080' }}>
              {userInfo?.email}
            </Typography>
          </div>
        </div>,
        <div className={s.item}>
          <NavLink to={'/'}>
            <Typography variant={'caption'} className={s.string}>
              <Person />
              My Profile
            </Typography>
          </NavLink>
        </div>,
        <div className={s.item}>
          <Typography as={'button'} variant={'caption'} onClick={onSignOut} className={s.string}>
            <ButtonArrow />
            Sign Out
          </Typography>
        </div>,
      ]}
      trigger={
        <div className={s.avatarWrapper}>
          <Typography variant={'subtitle1'} className={s.name}>
            {userInfo?.name}
          </Typography>
          <img className={s.avatar} src={avatar} alt="avatar" />
        </div>
      }
    ></CommonDropdownmenu>
  )
}
