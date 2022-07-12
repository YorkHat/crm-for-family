import {FC} from 'react'
import HeaderTaskWrapper from './HeaderTaskWrapper'

const HomeBody: FC = () => {
  return (
    <div className="container">
      <div className="home-body">
        <HeaderTaskWrapper>Текущие задачи</HeaderTaskWrapper>
        <HeaderTaskWrapper>Предстоящие задачи</HeaderTaskWrapper>
      </div>
    </div>
  )
}

export default HomeBody