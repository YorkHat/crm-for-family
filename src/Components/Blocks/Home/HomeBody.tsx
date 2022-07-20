import { FC } from 'react'
import HomeTaskWrapper from './HomeTaskWrapper'

const HomeBody: FC = () => {
  return (
    <div className="home-body">
      <HomeTaskWrapper>Текущие задачи</HomeTaskWrapper>
      <HomeTaskWrapper>Предстоящие задачи</HomeTaskWrapper>
    </div>
  )
}

export default HomeBody