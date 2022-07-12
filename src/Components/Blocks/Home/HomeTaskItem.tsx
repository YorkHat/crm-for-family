import {FC} from 'react'
import {ITask} from '../../../Types/types'

interface HomeTaskItemProps {
  item: ITask
}

const HomeTaskItem: FC<HomeTaskItemProps> = (props) => {
  return (
    <li className="home-item">
      {props.item.task}
    </li>
  )
}

export default HomeTaskItem