import { FC } from 'react'
import { IFamilyProfile } from '../Types/types'
import { FamilyItems } from '../Store/stores'
import ListUl from '../Components/Util/ListUl'
import FamilyItem from '../Components/Blocks/FamilyProfile/FamilyItem'

const FamilyProfilePage: FC = () => {
  return (
    <div className="content">
      <ListUl
        classNames="family-list"
        items={FamilyItems}
        renderItem={(familyItem: IFamilyProfile) =>
          <FamilyItem familyItem={familyItem} key={familyItem.id}/>}
      />
    </div>
  )
}

export default FamilyProfilePage