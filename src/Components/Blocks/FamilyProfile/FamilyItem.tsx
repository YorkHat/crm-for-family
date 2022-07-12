import {FC} from 'react'
import {IFamilyProfile} from '../../../Types/types'
import FamilyAvatar from './FamilyAvatar'
import FamilyProgressBar from './FamilyProgressBar'

interface FamilyItemProps {
  familyItem: IFamilyProfile
}

const FamilyItem: FC<FamilyItemProps> = (props) => {
  return (
    <li className="family-profile-item">
      <div className="family-profile-top">
        <FamilyAvatar name={props.familyItem.name}/>
        <p>{props.familyItem.online}</p>
      </div>
      <FamilyProgressBar/>
    </li>
  )
}

export default FamilyItem