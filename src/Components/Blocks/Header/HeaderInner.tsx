import { FC } from 'react'
import HeaderProfile from './HeaderProfile'

const HeaderInner: FC = () => {
  return (
    <div className="header-inner">
      <p>Logo</p>
      <HeaderProfile/>
    </div>
  )
}

export default HeaderInner