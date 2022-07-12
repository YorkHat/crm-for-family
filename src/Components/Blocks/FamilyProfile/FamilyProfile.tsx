import {FC} from 'react'
import ListUl from '../../Util/ListUl'
import FamilyItem from './FamilyItem'
import {FamilyItems} from '../../../Store/stores'
import {IFamilyProfile} from '../../../Types/types'

const FamilyProfile: FC = () => {
  return (
    <div className="content">
      <ListUl
        items={FamilyItems}
        renderItem={(familyItem: IFamilyProfile) =>
          <FamilyItem familyItem={familyItem} key={familyItem.id}/>}
        classNames="family-profile-list"
      />
    </div>
  )
}

export default FamilyProfile