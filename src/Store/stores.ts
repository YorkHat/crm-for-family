import {IFamilyProfile, ISidebarNav} from '../Types/types'

export const SidebarItems: ISidebarNav[] = [
  {id: Date.now(), title: 'Профиль'},
  {id: Date.now() + 1, title: 'Профиль семьи'},
  {id: Date.now() + 2, title: 'Календарь'},
  {id: Date.now() + 3, title: 'Статистика'},
  {id: Date.now() + 4, title: 'Заметки'}
]

export const FamilyItems: IFamilyProfile[] = [
  {id: Date.now(), name: 'Маша', online: '11 минут назад'},
  {id: Date.now() + 1, name: 'Ваня', online: '2 часа назад назад'},
  {id: Date.now() + 2, name: 'Игорёк', online: 'online'}
]