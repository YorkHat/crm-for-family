import {FC, ReactNode} from 'react'
import ListUl from '../../Util/ListUl'
import HeaderTaskItem from './HeaderTaskItem'
import {TaskItems} from '../../../Store/stores'
import {ITask} from '../../../Types/types'

interface HeaderTaskWrapperProps {
  children: ReactNode
}

const HeaderTaskWrapper: FC<HeaderTaskWrapperProps> = (props) => {
  return (
    <div className="home-tasks">
      <h2 className="home-tasks__title">
        {props.children}
      </h2>
      <ListUl
        items={TaskItems}
        renderItem={(task: ITask) => <HeaderTaskItem key={task.id} item={task}/>}
        classNames="home-tasks-list"
      />
    </div>
  )
}

export default HeaderTaskWrapper