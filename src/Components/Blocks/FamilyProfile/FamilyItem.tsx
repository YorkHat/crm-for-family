import { FC } from 'react'
import { IFamilyProfile } from '../../../Types/types'
import FamilyProgressBar from './FamilyProgressBar'
import YhAvatar from '../../UI/YhAvatar/YhAvatar'

interface FamilyItemProps {
  familyItem: IFamilyProfile
}

const FamilyItem: FC<FamilyItemProps> = (props) => {
  return (
    <li className="family-item">
      <div className="family-header">
        <YhAvatar
          wrapperClasses="family-avatar"
          avatarClasses="family__image"
          nameClasses="family-avatar__title"
          name={props.familyItem.name}
        />
        <p>{props.familyItem.online}</p>
      </div>
      <FamilyProgressBar/>
    </li>
  )
}

export default FamilyItem