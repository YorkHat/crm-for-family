import {FC} from 'react'
import {Avatar} from '@mui/material'

const SidebarAvatar: FC = () => {
  return (
    <div className="sidebar-avatar">
      <Avatar
        alt="Avatar"
        className="sidebar__image"
        src="https://via.placeholder.com/150"
      />
      <h2 className="sidebar__nickname">
        Nickname placeholder
      </h2>
    </div>
  )
}

export default SidebarAvatar