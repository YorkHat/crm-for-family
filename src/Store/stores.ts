import { IFamilyProfile, ISidebarNav, IStatisticsItem, ITask } from '../Types/types'
import { Colors } from '../Types/enums'

export const SidebarItems: ISidebarNav[] = [
  {id: Date.now(), title: 'Главная', path: '/'},
  {id: Date.now() + 1, title: 'Профиль семьи', path: '/profile'},
  {id: Date.now() + 2, title: 'Календарь', path: '/'},
  {id: Date.now() + 3, title: 'Статистика', path: '/stat'},
  {id: Date.now() + 4, title: 'Заметки', path: '/notes'}
]

export const FamilyItems: IFamilyProfile[] = [
  {id: Date.now(), name: 'Маша', online: '11 минут назад'},
  {id: Date.now() + 1, name: 'Ваня', online: '2 часа назад назад'},
  {id: Date.now() + 2, name: 'Игорёк', online: 'online'}
]

export const TaskItems: ITask[] = [
  {id: Date.now(), task: 'Задача1'},
  {id: Date.now() + 1, task: 'Задача2'},
  {id: Date.now() + 2, task: 'Задача3'}
]

export const StatisticsItems: IStatisticsItem[] = [
  {id: Date.now(), number: 20, title: "Выполненые задачи", color: Colors.GREEN},
  {id: Date.now() + 1, number: 10, title: "Назначено задач", color: Colors.BLUE},
  {id: Date.now() + 3, number: 15, title: "Передано задач", color: Colors.ORANGE},
  {id: Date.now() + 4, number: 5, title: "Не выполнено", color: Colors.PINK},
  {id: Date.now() + 5, number: 55, title: "Всего задач", color: Colors.LILY}
]