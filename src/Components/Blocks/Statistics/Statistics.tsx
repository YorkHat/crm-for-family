import {FC} from 'react'
import StatisticsItem from './StatisticsItem'
import ListUl from '../../Util/ListUl'
import {StatisticsItems} from '../../../Store/stores'
import {IStatisticsItem} from '../../../Types/types'
import StatisticsRating from './StatisticsRating'
import StatisticsHeader from './StatisticsHeader'

const Statistics: FC = () => {
  return (
    <div>
      <StatisticsHeader/>
      <ListUl
        classNames="stat-list"
        items={StatisticsItems}
        renderItem={(item: IStatisticsItem) => <StatisticsItem item={item} key={item.id}/>}
      />
      <StatisticsRating/>
    </div>
  )
}

export default Statistics