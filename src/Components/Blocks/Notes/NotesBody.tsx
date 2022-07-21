import { FC } from 'react'
import { ITask } from '../../../Types/types'
import { TaskItems } from '../../../Store/stores'
import ListUl from '../../Util/ListUl'
import NotesItem from './NotesItem'

const NotesBody: FC = () => {
  const renderNotes = (notesItem: ITask) => <NotesItem item={notesItem} key={notesItem.id}/>

  return (
    <div className="notes-body">
      <ListUl
        items={TaskItems}
        renderItem={renderNotes}
        classNames="notes-list"
      />
    </div>
  )
}

export default NotesBody