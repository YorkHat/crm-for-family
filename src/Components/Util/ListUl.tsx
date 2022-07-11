import {ReactNode} from 'react'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  classNames?: string
}

export default function ListUl<T>(props: ListProps<T>) {
  return (
    <ul className={props.classNames}>
      {props.items.map(props.renderItem)}
    </ul>
  )
}
