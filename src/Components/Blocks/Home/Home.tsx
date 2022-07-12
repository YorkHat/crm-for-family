import {FC} from 'react'
import HomeHeader from './HomeHeader'
import HomeBody from './HomeBody'

const Home: FC = () => {
  return (
    <div className="home">
      <HomeHeader/>
      <HomeBody/>
    </div>
  )
}

export default Home