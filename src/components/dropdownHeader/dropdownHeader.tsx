import { ButtonArrow, Person } from '../../assets/icons'
import { User } from '../../services'
import { Dropdownmenu } from '../ui/dropdownmenu'

import { Typography } from '../ui/typography'
import s from './dropdownHeader.module.scss'

type DropdownHeaderProps = {
  userInfo?: User | null
  avatar: string
  onSignOut: () => void
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({ onSignOut, avatar, userInfo }) => {
  return (
    <Dropdownmenu
    
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
          <Typography as={'a'} variant={'caption'} href={'/'} className={s.string}>
            <Person />
            My Profile
          </Typography>
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
    ></Dropdownmenu>
  )
}