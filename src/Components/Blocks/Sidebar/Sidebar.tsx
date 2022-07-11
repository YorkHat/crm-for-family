import {FC} from 'react'
import {ISidebarNav} from '../../../Types/types'
import ListUl from '../../Util/ListUl'
import SidebarItem from './SidebarItem'
import SidebarAvatar from './SidebarAvatar'
import {SidebarItems} from '../../../Store/stores'

const Sidebar: FC = () => {
  return (
    <nav className="sidebar">
      <SidebarAvatar/>
      <ListUl
        items={SidebarItems}
        renderItem={(sidebarItem: ISidebarNav) => <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.id}/>}
        classNames="sidebar-list"
      />
    </nav>
  )
}

export default Sidebar