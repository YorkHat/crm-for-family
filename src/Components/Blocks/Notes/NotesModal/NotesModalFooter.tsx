import { FC } from 'react'
import { Button } from '@mui/material'

const NotesModalFooter: FC = () => {
  return (
    <div className="notes-modal-footer">
      <Button
        className="notes-modal__btn"
        type="submit"
      >
        Сохранить
      </Button>
    </div>
  )
}

export default NotesModalFooter