import { ReactNode } from 'react';

export function getOrElse(value: any, component: ReactNode = value, elseComponent: ReactNode = '-'): ReactNode {
  return !!value ? component : elseComponent;
}
