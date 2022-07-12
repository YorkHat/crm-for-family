import {FC} from 'react'
import YhAvatar from '../../UI/YhAvatar/YhAvatar'

const HomeHeader: FC = () => {
  return (
    <div className="container">
      <YhAvatar
        name="Username"
        role="Role"
        wrapperClasses="home-header"
        namesWrapperClasses="home-profile"
      />
    </div>
  )
}

export default HomeHeader