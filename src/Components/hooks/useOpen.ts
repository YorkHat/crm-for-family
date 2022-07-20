import { useState } from 'react'

export const useOpen = (initialValue: boolean): Array<any> => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return [isOpen, handleOpen, handleClose]
}
