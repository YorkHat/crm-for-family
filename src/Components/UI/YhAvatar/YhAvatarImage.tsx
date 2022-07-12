import {FC} from 'react'
import {Avatar} from '@mui/material'

interface YhAvatarImageProps {
  avatarWrapperClasses?: string
  avatarClasses?: string
}

const YhAvatarImage: FC<YhAvatarImageProps> = (props) => {
  return (
    <div className={props.avatarWrapperClasses}>
      <Avatar
        alt="Avatar"
        src="https://via.placeholder.com/150"
        className={props.avatarClasses}
      />
    </div>
  )
}

export default YhAvatarImage