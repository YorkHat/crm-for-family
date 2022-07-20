import { FC } from 'react'
import { Input, TextareaAutosize } from '@mui/material'
import NotesModalFooter from './NotesModalFooter'

const NotesModalContent: FC = () => {
  return (
    <form method="POST" className="notes-modal">
      <Input
        className="notes-modal__input"
        placeholder="Заголовок"
      />
      <TextareaAutosize
        aria-label="notes"
        placeholder="Введите заметку"
        className="notes-modal__textarea"
      />
      <NotesModalFooter/>
    </form>
  )
}

export default NotesModalContent