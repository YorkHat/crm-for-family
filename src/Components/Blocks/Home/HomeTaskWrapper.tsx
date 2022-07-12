import {FC, ReactNode} from 'react'
import ListUl from '../../Util/ListUl'
import HomeTaskItem from './HomeTaskItem'
import {TaskItems} from '../../../Store/stores'
import {ITask} from '../../../Types/types'

interface HomeTaskWrapperProps {
  children: ReactNode
}

const HomeTaskWrapper: FC<HomeTaskWrapperProps> = (props) => {
  return (
    <div className="home-tasks">
      <h2 className="home__title">
        {props.children}
      </h2>
      <ListUl
        items={TaskItems}
        renderItem={(task: ITask) => <HomeTaskItem key={task.id} item={task}/>}
        classNames="home-list"
      />
    </div>
  )
}

export default HomeTaskWrapper