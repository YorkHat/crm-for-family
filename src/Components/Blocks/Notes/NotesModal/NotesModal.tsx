import { FC } from 'react'
import { Modal } from '@mui/material'
import NotesModalContent from './NotesModalContent'

interface NotesModalProps {
  isOpen: boolean
  onClose: () => void
}

const NotesModal: FC<NotesModalProps> = (props) => {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <NotesModalContent/>
    </Modal>
  )
}

export default NotesModal