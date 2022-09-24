import React, { useState } from 'react';

export type UseToggle = [boolean, () => void];

export const useToggle = (initialValue: boolean = false): UseToggle => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggle];
};
