import { FC } from 'react'
import { Button, TextField } from '@mui/material'
import { useOpen } from '../../hooks/useOpen'
import NotesModal from './NotesModal/NotesModal'

const NotesHeader: FC = () => {
  const [isOpen, handleOpen, handleClose] = useOpen(false)

  return (
    <div className="notes-header">
      <Button
        variant="outlined"
        className="notes__btn"
        onClick={handleOpen}
      >
        Добавить заметку
      </Button>
      <TextField
        className="notes__input"
        label="Поиск"
      />
      <NotesModal
        isOpen={isOpen}
        onClose={handleClose}
      />
    </div>
  )
}

export default NotesHeader