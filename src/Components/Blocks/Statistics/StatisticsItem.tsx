import {FC} from 'react'
import {IStatisticsItem} from '../../../Types/types'
import Circle from '../../UI/Circle/Circle'

interface StatisticsItemProps {
  item: IStatisticsItem
}

const StatisticsItem: FC<StatisticsItemProps> = (props) => {
  return (
    <li className="stat-item">
      <h4 className="stat-item__title">{props.item.title}</h4>
      <Circle
        color={props.item.color}
        children={props.item.number}
      />
    </li>
  )
}

export default StatisticsItem