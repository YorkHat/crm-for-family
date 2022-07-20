import { FC } from 'react'
import YhAvatar from '../../UI/YhAvatar/YhAvatar'

const HomeHeader: FC = () => {
  return (
    <YhAvatar
      name="Username"
      role="Role"
      wrapperClasses="home-header"
      namesWrapperClasses="home-profile"
    />
  )
}

export default HomeHeader