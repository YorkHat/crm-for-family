import { FC } from 'react'
import { StatisticsItems } from '../Store/stores'
import { IStatisticsItem } from '../Types/types'
import ListUl from '../Components/Util/ListUl'
import Wrapper from '../Components/Util/Wrapper'
import StatisticsHeader from '../Components/Blocks/Statistics/StatisticsHeader'
import StatisticsItem from '../Components/Blocks/Statistics/StatisticsItem'
import StatisticsRating from '../Components/Blocks/Statistics/StatisticsRating'

const StatisticsPage: FC = () => {
  const renderStatistics = (item: IStatisticsItem) => <StatisticsItem item={item} key={item.id}/>

  return (
    <div>
      <Wrapper>
        <StatisticsHeader/>
        <ListUl
          classNames="stat-list"
          items={StatisticsItems}
          renderItem={renderStatistics}
        />
        <StatisticsRating/>
      </Wrapper>
    </div>
  )
}

export default StatisticsPage