import { FC } from 'react'
import { Button, TextField } from '@mui/material'

const NotesHeader: FC = () => {
  return (
    <div className="notes-header">
      <Button
        variant="outlined"
        className="notes__btn"
      >
        Добавить заметку
      </Button>
      <TextField
        className="notes__input"
        label="Поиск"
      />
    </div>
  )
}

export default NotesHeader