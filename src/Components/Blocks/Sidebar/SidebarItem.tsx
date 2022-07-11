import {FC} from 'react'
import {ISidebarNav} from '../../../Types/types'

interface SidebarItemProps {
  sidebarItem: ISidebarNav
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  return (
    <li className="sidebar-item">
      <a href="#" className="sidebar__link">
        {props.sidebarItem.title}
      </a>
    </li>
  )
}

export default SidebarItem