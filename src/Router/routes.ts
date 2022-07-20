import { IRoute } from '../Types/types'
import HomePage from '../Pages/HomePage'
import NotesPage from '../Pages/NotesPage'
import FamilyProfilePage from '../Pages/FamilyProfilePage'
import StatisticsPage from '../Pages/StatisticsPage'

export const routes: IRoute[] = [
  {path: '/', component: HomePage},
  {path: '/notes', component: NotesPage},
  {path: '/profile', component: FamilyProfilePage},
  {path: '/stat', component: StatisticsPage}
]