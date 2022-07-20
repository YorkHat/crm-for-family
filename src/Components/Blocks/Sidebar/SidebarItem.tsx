import { FC } from 'react'
import { ISidebarNav } from '../../../Types/types'
import { Link } from 'react-router-dom'

interface SidebarItemProps {
  sidebarItem: ISidebarNav
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  return (
    <li className="sidebar-item">
      <Link to={props.sidebarItem.path} className="sidebar__link">
        {props.sidebarItem.title}
      </Link>
    </li>
  )
}

export default SidebarItem