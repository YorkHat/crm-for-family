import {FC} from 'react'
import HomeHeader from './HomeHeader'
import HomeBody from './HomeBody'
import Wrapper from '../../Util/Wrapper'

const Home: FC = () => {
  return (
    <div className="home">
      <Wrapper>
        <HomeHeader/>
        <HomeBody/>
      </Wrapper>
    </div>
  )
}

export default Home