import {FC} from 'react'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <p>Logo</p>
        <HeaderProfile/>
      </div>
    </header>
  )
}

export default Header