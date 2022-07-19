import {FC} from 'react'
import NotesHeader from './NotesHeader'
import NotesBody from './NotesBody'
import Wrapper from '../../Util/Wrapper'

const Notes: FC = () => {
  return (
    <div className="notes">
      <Wrapper>
        <NotesHeader/>
        <NotesBody/>
      </Wrapper>
    </div>
  )
}

export default Notes