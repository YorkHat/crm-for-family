import { FC, ReactNode } from 'react'
import { TaskItems } from '../../../Store/stores'
import { ITask } from '../../../Types/types'
import ListUl from '../../Util/ListUl'
import HomeTaskItem from './HomeTaskItem'

interface HomeTaskWrapperProps {
  children: ReactNode
}

const HomeTaskWrapper: FC<HomeTaskWrapperProps> = (props) => {
  const renderHomeTasks = (task: ITask) => <HomeTaskItem key={task.id} item={task}/>

  return (
    <div className="home-tasks">
      <h2 className="home__title">
        {props.children}
      </h2>
      <ListUl
        items={TaskItems}
        renderItem={renderHomeTasks}
        classNames="home-list"
      />
    </div>
  )
}

export default HomeTaskWrapper