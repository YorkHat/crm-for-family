import { FC } from 'react'
import Wrapper from '../Components/Util/Wrapper'
import NotesHeader from '../Components/Blocks/Notes/NotesHeader'
import NotesBody from '../Components/Blocks/Notes/NotesBody'

const NotesPage: FC = () => {
  return (
    <div className="notes">
      <Wrapper>
        <NotesHeader/>
        <NotesBody/>
      </Wrapper>
    </div>
  )
}

export default NotesPage