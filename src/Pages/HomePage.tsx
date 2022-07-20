import { FC } from 'react'
import Wrapper from '../Components/Util/Wrapper'
import HomeHeader from '../Components/Blocks/Home/HomeHeader'
import HomeBody from '../Components/Blocks/Home/HomeBody'

const HomePage: FC = () => {
  return (
    <div className="home">
      <Wrapper>
        <HomeHeader/>
        <HomeBody/>
      </Wrapper>
    </div>
  )
}

export default HomePage