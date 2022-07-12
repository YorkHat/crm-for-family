import {FC} from 'react'
import HomeProfile from './HomeProfile'
import {Avatar} from '@mui/material'

const HomeHeader: FC = () => {
  return (
    <div className="container home-header">
      <Avatar
        alt="Avatar"
        src="https://via.placeholder.com/150"
      />
      <HomeProfile/>
    </div>
  )
}

export default HomeHeader