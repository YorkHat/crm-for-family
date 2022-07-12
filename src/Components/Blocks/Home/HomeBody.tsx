import {FC} from 'react'
import HomeTaskWrapper from './HomeTaskWrapper'

const HomeBody: FC = () => {
  return (
    <div className="container">
      <div className="home-body">
        <HomeTaskWrapper>Текущие задачи</HomeTaskWrapper>
        <HomeTaskWrapper>Предстоящие задачи</HomeTaskWrapper>
      </div>
    </div>
  )
}

export default HomeBody