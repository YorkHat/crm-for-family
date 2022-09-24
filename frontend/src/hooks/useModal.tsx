import { useState } from 'react';

export type UseModal = {
  isModalOpen: boolean;
  setModalIsClosed: () => void;
  setModalIsOpen: () => void;
};

export const useModal = (): UseModal => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const setModalIsClosed = (): void => setIsModalOpen(false);
  const setModalIsOpen = (): void => setIsModalOpen(true);

  return { isModalOpen, setModalIsClosed, setModalIsOpen };
};
