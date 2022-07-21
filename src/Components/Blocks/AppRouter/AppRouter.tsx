import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../../Router/routes'
import { IRoute } from '../../../Types/types'

const AppRouter: FC = () => {
  const renderRoutes = (route: IRoute) => <Route element={<route.component/>} path={route.path}/>

  return (
    <Routes>
      {routes.map(renderRoutes)}
    </Routes>
  )
}

export default AppRouter