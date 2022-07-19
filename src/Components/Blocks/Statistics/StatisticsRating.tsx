import {FC} from 'react'
import Rating from '@mui/material/Rating'

const StatisticsRating: FC = () => {
  return (
    <div className="stat-rating">
      <h4>Средний рейтинг всех выполненых задач</h4>
      <Rating
        name="size-large"
        defaultValue={2}
        size="large"
        className="stat-star"
      />
    </div>
  )
}

export default StatisticsRating