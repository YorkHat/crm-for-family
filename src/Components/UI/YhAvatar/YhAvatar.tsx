import {FC} from 'react'
import YhAvatarImage from './YhAvatarImage'
import YhAvatarTitles from './YhAvatarTitles'

interface YhAvatarProps {
  name: string
  role?: string

  wrapperClasses?: string
  avatarWrapperClasses?: string
  namesWrapperClasses?: string

  avatarClasses?: string
  nameClasses?: string
  roleClasses?: string
}

const YhAvatar: FC<YhAvatarProps> = (props) => {
  return (
    <div className={props.wrapperClasses}>
      <YhAvatarImage
        avatarWrapperClasses={props.avatarWrapperClasses}
        avatarClasses={props.avatarClasses}
      />
      <YhAvatarTitles
        name={props.name}
        namesWrapperClasses={props.namesWrapperClasses}
        nameClasses={props.nameClasses}
        role={props.role}
        roleClasses={props.roleClasses}
      />
    </div>
  )
}

export default YhAvatar