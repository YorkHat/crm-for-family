import {FC} from 'react'
import {ITask} from '../../../Types/types'

interface HeaderTaskItemProps {
  item: ITask
}

const HeaderTaskItem: FC<HeaderTaskItemProps> = (props) => {
  return (
    <li className="home-tasks-item">
      {props.item.task}
    </li>
  )
}

export default HeaderTaskItem