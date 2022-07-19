import {FC} from 'react'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'

const StatisticsFilter: FC = () => {
  return (
    <div>
      <FormControl className="stat-form">
        <Select
          className="stat-select"
          defaultValue="today"
        >
          <MenuItem value="today">Сегодня</MenuItem>
          <MenuItem value="week">Неделя</MenuItem>
          <MenuItem value="month">Месяц</MenuItem>
          <MenuItem value="year">Год</MenuItem>
          <MenuItem value="all-the-time">Все время</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default StatisticsFilter