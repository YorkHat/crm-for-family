import { FC } from 'react'
import HeaderInner from './HeaderInner'
import Wrapper from '../../Util/Wrapper'

const Header: FC = () => {
  return (
    <header className="header">
      <Wrapper>
        <HeaderInner/>
      </Wrapper>
    </header>
  )
}

export default Header