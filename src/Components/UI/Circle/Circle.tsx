import { FC, ReactNode } from 'react'
import { Colors } from '../../../Types/enums'

interface CircleProps {
  children: ReactNode
  color: Colors
}

const Circle: FC<CircleProps> = (props) => {
  const circleParams = {border: `1rem solid ${props.color}`}

  return (
    <div className="circle" style={circleParams}>
      <span className="circle__content">
        {props.children}
      </span>
    </div>
  )
}

export default Circle