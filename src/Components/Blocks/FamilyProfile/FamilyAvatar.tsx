import {FC} from 'react'
import {Avatar} from '@mui/material'

interface FamilyAvatarProps {
  name: string
}

const FamilyAvatar: FC<FamilyAvatarProps> = (props) => {
  return (
    <div className="family-profile-avatar">
      <Avatar
        alt="Avatar"
        className="family__image"
        src="https://via.placeholder.com/150"
      />
      <h2 className="family-profile-avatar__title">{props.name}</h2>
    </div>
  )
}

export default FamilyAvatar