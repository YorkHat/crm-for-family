import { FC } from 'react'
import { ITask } from '../../../Types/types'
import NotesCard from './NotesCard'

interface NotesItemProps {
  item: ITask
}

const NotesItem: FC<NotesItemProps> = (props) => {
  return (
    <li className="notes-item">
      <NotesCard item={props.item}/>
    </li>
  )
}

export default NotesItem