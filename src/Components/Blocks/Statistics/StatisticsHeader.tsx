import {FC} from 'react'
import StatisticsFilter from './StatisticsFilter'

const StatisticsHeader: FC = () => {
  return (
    <div>
      <StatisticsFilter/>
      <h2 className="stat__title">Статистика пользователя "Имя"</h2>
    </div>
  )
}

export default StatisticsHeader