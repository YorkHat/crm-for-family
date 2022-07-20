import { FC } from 'react'
import {Badge} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

const HeaderProfile: FC = () => {
  return (
    <div className="header-profile">
      <Badge
        badgeContent={99}
        color="secondary"
        max={99}
      >
        <NotificationsIcon sx={{fontSize: 30}}/>
      </Badge>
      <p>чубр профиль v</p>
    </div>
  )
}

export default HeaderProfile