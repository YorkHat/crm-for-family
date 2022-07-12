import {FC} from 'react'
import {ISidebarNav} from '../../../Types/types'
import ListUl from '../../Util/ListUl'
import SidebarItem from './SidebarItem'
import YhAvatar from '../../UI/YhAvatar/YhAvatar'
import {SidebarItems} from '../../../Store/stores'

const Sidebar: FC = () => {
  return (
    <nav className="sidebar">
      <YhAvatar
        name="nickname placeholder"
        wrapperClasses="sidebar-avatar"
        avatarClasses="sidebar__image"
        nameClasses="sidebar__nickname"
      />
      <ListUl
        items={SidebarItems}
        renderItem={(sidebarItem: ISidebarNav) => <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.id}/>}
        classNames="sidebar-list"
      />
    </nav>
  )
}

export default Sidebar