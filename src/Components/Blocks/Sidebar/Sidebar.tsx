import { FC } from 'react'
import { ISidebarNav } from '../../../Types/types'
import { SidebarItems } from '../../../Store/stores'
import ListUl from '../../Util/ListUl'
import SidebarItem from './SidebarItem'
import YhAvatar from '../../UI/YhAvatar/YhAvatar'

const Sidebar: FC = () => {
  const renderSidebar = (sidebarItem: ISidebarNav) => <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.id}/>

  return (
    <nav className="sidebar">
      <YhAvatar
        name="nickname placeholder"
        wrapperClasses="sidebar-avatar"
        avatarClasses="sidebar__image"
        nameClasses="sidebar__nickname"
      />
      <ListUl
        classNames="sidebar-list"
        items={SidebarItems}
        renderItem={renderSidebar}
      />
    </nav>
  )
}

export default Sidebar