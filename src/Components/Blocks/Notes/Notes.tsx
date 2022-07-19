import {FC} from 'react'
import NotesHeader from './NotesHeader'
import NotesBody from './NotesBody'

const Notes: FC = () => {
  return (
    <div className="notes">
      <div className="container">
        <NotesHeader/>
        <NotesBody/>
      </div>
    </div>
  )
}

export default Notes