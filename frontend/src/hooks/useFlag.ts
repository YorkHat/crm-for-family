import { useState } from 'react';

type UseFlag = [boolean, () => void, () => void];

export function useFlag(initialState = false): UseFlag {
  const [flag, setFlag] = useState<boolean>(initialState);

  const setFlagTrue = (): void => setFlag(true);
  const setFlagFalse = (): void => setFlag(false);

  return [flag, setFlagTrue, setFlagFalse];
}
