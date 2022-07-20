import { FC, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export default Wrapper