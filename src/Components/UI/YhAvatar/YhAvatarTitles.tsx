import { FC } from 'react'

interface YhAvatarTitlesProps {
  name: string
  namesWrapperClasses?: string
  nameClasses?: string
  role?: string
  roleClasses?: string
}

const YhAvatarTitles: FC<YhAvatarTitlesProps> = (props) => {
  return (
    <div className={props.namesWrapperClasses}>
      <h2 className={props.nameClasses}>
        {props.name}
      </h2>
      {
        props.role && (
          <p className={props.roleClasses}>
            {props.role}
          </p>
        )
      }
    </div>
  )
}

export default YhAvatarTitles