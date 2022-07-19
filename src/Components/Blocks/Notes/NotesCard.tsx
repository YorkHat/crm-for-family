import {FC} from 'react'
import {ITask} from '../../../Types/types'
import {Card, CardContent, Typography} from '@mui/material'

interface NotesCardProps {
  item: ITask
}

const NotesCard: FC<NotesCardProps> = (props) => {
  return (
    <Card variant="outlined" className="notes-card">
      <CardContent>
        <Typography className="notes__typography" color="text.secondary">
          {props.item.task}
        </Typography>
        <Typography className="notes__typography">
          Какая-то заметка
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NotesCard