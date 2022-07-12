import {ISidebarNav, ITask} from '../Types/types'

export const SidebarItems: ISidebarNav[] = [
  {id: Date.now(), title: 'Главная'},
  {id: Date.now() + 1, title: 'Профиль семьи'},
  {id: Date.now() + 2, title: 'Календарь'},
  {id: Date.now() + 3, title: 'Статистика'},
  {id: Date.now() + 4, title: 'Заметки'}
]

export const TaskItems: ITask[] = [
  {id: Date.now(), task: 'Задача1'},
  {id: Date.now() + 1, task: 'Задача2'},
  {id: Date.now() + 3, task: 'Задача2'},
]